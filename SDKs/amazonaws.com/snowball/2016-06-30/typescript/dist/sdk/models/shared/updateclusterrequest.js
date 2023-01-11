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
exports.UpdateClusterRequest = void 0;
var utils_1 = require("../../../internal/utils");
var notification_1 = require("./notification");
var ondeviceserviceconfiguration_1 = require("./ondeviceserviceconfiguration");
var jobresource_1 = require("./jobresource");
var shippingoptionenum_1 = require("./shippingoptionenum");
var UpdateClusterRequest = /** @class */ (function (_super) {
    __extends(UpdateClusterRequest, _super);
    function UpdateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AddressId" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "addressId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ClusterId" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "clusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForwardingAddressId" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "forwardingAddressId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Notification" }),
        __metadata("design:type", notification_1.Notification)
    ], UpdateClusterRequest.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OnDeviceServiceConfiguration" }),
        __metadata("design:type", ondeviceserviceconfiguration_1.OnDeviceServiceConfiguration)
    ], UpdateClusterRequest.prototype, "onDeviceServiceConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Resources" }),
        __metadata("design:type", jobresource_1.JobResource)
    ], UpdateClusterRequest.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "roleARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ShippingOption" }),
        __metadata("design:type", String)
    ], UpdateClusterRequest.prototype, "shippingOption", void 0);
    return UpdateClusterRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterRequest = UpdateClusterRequest;
