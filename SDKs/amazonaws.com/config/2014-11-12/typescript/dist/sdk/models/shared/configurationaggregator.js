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
exports.ConfigurationAggregator = void 0;
var utils_1 = require("../../../internal/utils");
var accountaggregationsource_1 = require("./accountaggregationsource");
var organizationaggregationsource_1 = require("./organizationaggregationsource");
// ConfigurationAggregator
/**
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.
**/
var ConfigurationAggregator = /** @class */ (function (_super) {
    __extends(ConfigurationAggregator, _super);
    function ConfigurationAggregator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountAggregationSources", elemType: accountaggregationsource_1.AccountAggregationSource }),
        __metadata("design:type", Array)
    ], ConfigurationAggregator.prototype, "accountAggregationSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationAggregatorArn" }),
        __metadata("design:type", String)
    ], ConfigurationAggregator.prototype, "configurationAggregatorArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationAggregatorName" }),
        __metadata("design:type", String)
    ], ConfigurationAggregator.prototype, "configurationAggregatorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], ConfigurationAggregator.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ConfigurationAggregator.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], ConfigurationAggregator.prototype, "lastUpdatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OrganizationAggregationSource" }),
        __metadata("design:type", organizationaggregationsource_1.OrganizationAggregationSource)
    ], ConfigurationAggregator.prototype, "organizationAggregationSource", void 0);
    return ConfigurationAggregator;
}(utils_1.SpeakeasyBase));
exports.ConfigurationAggregator = ConfigurationAggregator;
