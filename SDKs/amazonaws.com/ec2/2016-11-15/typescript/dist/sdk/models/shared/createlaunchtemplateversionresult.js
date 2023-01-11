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
exports.CreateLaunchTemplateVersionResult = exports.CreateLaunchTemplateVersionResultWarning = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersion = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification = exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = void 0;
var utils_1 = require("../../../internal/utils");
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
/**
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.prototype, "capacityReservationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.prototype, "capacityReservationResourceGroupArn", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
/**
 * Information about the Capacity Reservation targeting option.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification.prototype, "capacityReservationPreference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification.prototype, "capacityReservationTarget", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions
/**
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions.prototype, "coreCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions.prototype, "threadsPerCore", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification
/**
 * The credit option for CPU usage of the instance.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification.prototype, "cpuCredits", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions
/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions.prototype, "enabled", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
/**
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions.prototype, "configured", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile
/**
 * The IAM instance profile.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile.prototype, "name", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
/**
 * The options for Spot Instances.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "blockDurationMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "instanceInterruptionBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "maxPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "spotInstanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions.prototype, "validUntil", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
/**
 * The market (purchasing) option for the instances.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions.prototype, "marketType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions.prototype, "spotOptions", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions.prototype, "httpEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions.prototype, "httpProtocolIpv6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions.prototype, "httpPutResponseHopLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions.prototype, "httpTokens", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions.prototype, "state", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring
/**
 * The monitoring for the instance.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring.prototype, "enabled", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement
/**
 * The placement of the instance.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "affinity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "hostResourceGroupArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "partitionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "spreadDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement.prototype, "tenancy", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement;
// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData
/**
 * Information about the launch template.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "blockDeviceMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "capacityReservationSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "cpuOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "creditSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "disableApiTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "ebsOptimized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "elasticGpuSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "elasticInferenceAccelerators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "enclaveOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "hibernationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "iamInstanceProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "instanceInitiatedShutdownBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "instanceMarketOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "instanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "kernelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "keyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "licenseSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "metadataOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "monitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "networkInterfaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "placement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "ramDiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "securityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "securityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "tagSpecifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData.prototype, "userData", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData = CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData;
// CreateLaunchTemplateVersionResultLaunchTemplateVersion
/**
 * Information about the launch template version.
**/
var CreateLaunchTemplateVersionResultLaunchTemplateVersion = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultLaunchTemplateVersion, _super);
    function CreateLaunchTemplateVersionResultLaunchTemplateVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "defaultVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "launchTemplateData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "launchTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "launchTemplateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "versionDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultLaunchTemplateVersion.prototype, "versionNumber", void 0);
    return CreateLaunchTemplateVersionResultLaunchTemplateVersion;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultLaunchTemplateVersion = CreateLaunchTemplateVersionResultLaunchTemplateVersion;
// CreateLaunchTemplateVersionResultWarning
/**
 * If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
var CreateLaunchTemplateVersionResultWarning = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResultWarning, _super);
    function CreateLaunchTemplateVersionResultWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLaunchTemplateVersionResultWarning.prototype, "errors", void 0);
    return CreateLaunchTemplateVersionResultWarning;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResultWarning = CreateLaunchTemplateVersionResultWarning;
var CreateLaunchTemplateVersionResult = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionResult, _super);
    function CreateLaunchTemplateVersionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultLaunchTemplateVersion)
    ], CreateLaunchTemplateVersionResult.prototype, "launchTemplateVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLaunchTemplateVersionResultWarning)
    ], CreateLaunchTemplateVersionResult.prototype, "warning", void 0);
    return CreateLaunchTemplateVersionResult;
}(utils_1.SpeakeasyBase));
exports.CreateLaunchTemplateVersionResult = CreateLaunchTemplateVersionResult;
