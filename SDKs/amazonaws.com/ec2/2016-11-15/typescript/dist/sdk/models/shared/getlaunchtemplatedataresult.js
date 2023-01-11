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
exports.GetLaunchTemplateDataResult = exports.GetLaunchTemplateDataResultLaunchTemplateData = exports.GetLaunchTemplateDataResultLaunchTemplateDataPlacement = exports.GetLaunchTemplateDataResultLaunchTemplateDataMonitoring = exports.GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile = exports.GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification = exports.GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions = exports.GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification = exports.GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = void 0;
var utils_1 = require("../../../internal/utils");
// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
/**
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.prototype, "capacityReservationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.prototype, "capacityReservationResourceGroupArn", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification
/**
 * Information about the Capacity Reservation targeting option.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification.prototype, "capacityReservationPreference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification.prototype, "capacityReservationTarget", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification = GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification;
// GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions
/**
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions.prototype, "coreCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions.prototype, "threadsPerCore", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions = GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification
/**
 * The credit option for CPU usage of the instance.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification.prototype, "cpuCredits", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification = GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification;
// GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions
/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions.prototype, "enabled", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions = GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions
/**
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions.prototype, "configured", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions = GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile
/**
 * The IAM instance profile.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile.prototype, "name", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile = GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile;
// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions
/**
 * The options for Spot Instances.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "blockDurationMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "instanceInterruptionBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "maxPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "spotInstanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "validUntil", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions = GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions
/**
 * The market (purchasing) option for the instances.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions.prototype, "marketType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions.prototype, "spotOptions", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions = GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions.prototype, "httpEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions.prototype, "httpProtocolIpv6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions.prototype, "httpPutResponseHopLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions.prototype, "httpTokens", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions.prototype, "state", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions = GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions;
// GetLaunchTemplateDataResultLaunchTemplateDataMonitoring
/**
 * The monitoring for the instance.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataMonitoring = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataMonitoring, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataMonitoring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataMonitoring.prototype, "enabled", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataMonitoring;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataMonitoring = GetLaunchTemplateDataResultLaunchTemplateDataMonitoring;
// GetLaunchTemplateDataResultLaunchTemplateDataPlacement
/**
 * The placement of the instance.
**/
var GetLaunchTemplateDataResultLaunchTemplateDataPlacement = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateDataPlacement, _super);
    function GetLaunchTemplateDataResultLaunchTemplateDataPlacement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "affinity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "hostResourceGroupArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "partitionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "spreadDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateDataPlacement.prototype, "tenancy", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateDataPlacement;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateDataPlacement = GetLaunchTemplateDataResultLaunchTemplateDataPlacement;
// GetLaunchTemplateDataResultLaunchTemplateData
/**
 * The instance data.
**/
var GetLaunchTemplateDataResultLaunchTemplateData = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResultLaunchTemplateData, _super);
    function GetLaunchTemplateDataResultLaunchTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "blockDeviceMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "capacityReservationSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "cpuOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "creditSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "disableApiTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "ebsOptimized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "elasticGpuSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "elasticInferenceAccelerators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "enclaveOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "hibernationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "iamInstanceProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "instanceInitiatedShutdownBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "instanceMarketOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "instanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "kernelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "keyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "licenseSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "metadataOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataMonitoring)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "monitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "networkInterfaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateDataPlacement)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "placement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "ramDiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "securityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "securityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "tagSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLaunchTemplateDataResultLaunchTemplateData.prototype, "userData", void 0);
    return GetLaunchTemplateDataResultLaunchTemplateData;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResultLaunchTemplateData = GetLaunchTemplateDataResultLaunchTemplateData;
var GetLaunchTemplateDataResult = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataResult, _super);
    function GetLaunchTemplateDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLaunchTemplateDataResultLaunchTemplateData)
    ], GetLaunchTemplateDataResult.prototype, "launchTemplateData", void 0);
    return GetLaunchTemplateDataResult;
}(utils_1.SpeakeasyBase));
exports.GetLaunchTemplateDataResult = GetLaunchTemplateDataResult;
