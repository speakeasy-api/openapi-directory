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
exports.CreateJobRequest = void 0;
var utils_1 = require("../../../internal/utils");
var deviceconfiguration_1 = require("./deviceconfiguration");
var jobtypeenum_1 = require("./jobtypeenum");
var notification_1 = require("./notification");
var ondeviceserviceconfiguration_1 = require("./ondeviceserviceconfiguration");
var remotemanagementenum_1 = require("./remotemanagementenum");
var jobresource_1 = require("./jobresource");
var shippingoptionenum_1 = require("./shippingoptionenum");
var snowballcapacityenum_1 = require("./snowballcapacityenum");
var snowballtypeenum_1 = require("./snowballtypeenum");
var taxdocuments_1 = require("./taxdocuments");
var CreateJobRequest = /** @class */ (function (_super) {
    __extends(CreateJobRequest, _super);
    function CreateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AddressId" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "addressId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ClusterId" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "clusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceConfiguration" }),
        __metadata("design:type", deviceconfiguration_1.DeviceConfiguration)
    ], CreateJobRequest.prototype, "deviceConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForwardingAddressId" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "forwardingAddressId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JobType" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "jobType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KmsKeyARN" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "kmsKeyARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LongTermPricingId" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "longTermPricingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Notification" }),
        __metadata("design:type", notification_1.Notification)
    ], CreateJobRequest.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OnDeviceServiceConfiguration" }),
        __metadata("design:type", ondeviceserviceconfiguration_1.OnDeviceServiceConfiguration)
    ], CreateJobRequest.prototype, "onDeviceServiceConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RemoteManagement" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "remoteManagement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Resources" }),
        __metadata("design:type", jobresource_1.JobResource)
    ], CreateJobRequest.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "roleARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ShippingOption" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "shippingOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SnowballCapacityPreference" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "snowballCapacityPreference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SnowballType" }),
        __metadata("design:type", String)
    ], CreateJobRequest.prototype, "snowballType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxDocuments" }),
        __metadata("design:type", taxdocuments_1.TaxDocuments)
    ], CreateJobRequest.prototype, "taxDocuments", void 0);
    return CreateJobRequest;
}(utils_1.SpeakeasyBase));
exports.CreateJobRequest = CreateJobRequest;
