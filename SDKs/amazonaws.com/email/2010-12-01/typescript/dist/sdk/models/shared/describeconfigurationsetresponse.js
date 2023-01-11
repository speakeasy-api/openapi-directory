"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeConfigurationSetResponse = void 0;
var utils_1 = require("../../../internal/utils");
var configurationset_1 = require("./configurationset");
var deliveryoptions_1 = require("./deliveryoptions");
var eventdestination_1 = require("./eventdestination");
var reputationoptions_1 = require("./reputationoptions");
var trackingoptions_1 = require("./trackingoptions");
// DescribeConfigurationSetResponse
/**
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
var DescribeConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(DescribeConfigurationSetResponse, _super);
    function DescribeConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", configurationset_1.ConfigurationSet)
    ], DescribeConfigurationSetResponse.prototype, "configurationSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", deliveryoptions_1.DeliveryOptions)
    ], DescribeConfigurationSetResponse.prototype, "deliveryOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: eventdestination_1.EventDestination }),
        __metadata("design:type", Array)
    ], DescribeConfigurationSetResponse.prototype, "eventDestinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", reputationoptions_1.ReputationOptions)
    ], DescribeConfigurationSetResponse.prototype, "reputationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", trackingoptions_1.TrackingOptions)
    ], DescribeConfigurationSetResponse.prototype, "trackingOptions", void 0);
    return DescribeConfigurationSetResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationSetResponse = DescribeConfigurationSetResponse;
