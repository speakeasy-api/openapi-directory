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
exports.InstanceAttribute = exports.InstanceAttributeUserData = exports.InstanceAttributeSriovNetSupport = exports.InstanceAttributeSourceDestCheck = exports.InstanceAttributeRootDeviceName = exports.InstanceAttributeRamdiskId = exports.InstanceAttributeKernelId = exports.InstanceAttributeInstanceType = exports.InstanceAttributeInstanceInitiatedShutdownBehavior = exports.InstanceAttributeEnclaveOptions = exports.InstanceAttributeEnaSupport = exports.InstanceAttributeEbsOptimized = exports.InstanceAttributeDisableApiTermination = void 0;
var utils_1 = require("../../../internal/utils");
// InstanceAttributeDisableApiTermination
/**
 * If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
**/
var InstanceAttributeDisableApiTermination = /** @class */ (function (_super) {
    __extends(InstanceAttributeDisableApiTermination, _super);
    function InstanceAttributeDisableApiTermination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeDisableApiTermination.prototype, "value", void 0);
    return InstanceAttributeDisableApiTermination;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeDisableApiTermination = InstanceAttributeDisableApiTermination;
// InstanceAttributeEbsOptimized
/**
 * Indicates whether the instance is optimized for Amazon EBS I/O.
**/
var InstanceAttributeEbsOptimized = /** @class */ (function (_super) {
    __extends(InstanceAttributeEbsOptimized, _super);
    function InstanceAttributeEbsOptimized() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeEbsOptimized.prototype, "value", void 0);
    return InstanceAttributeEbsOptimized;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeEbsOptimized = InstanceAttributeEbsOptimized;
// InstanceAttributeEnaSupport
/**
 * Indicates whether enhanced networking with ENA is enabled.
**/
var InstanceAttributeEnaSupport = /** @class */ (function (_super) {
    __extends(InstanceAttributeEnaSupport, _super);
    function InstanceAttributeEnaSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeEnaSupport.prototype, "value", void 0);
    return InstanceAttributeEnaSupport;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeEnaSupport = InstanceAttributeEnaSupport;
// InstanceAttributeEnclaveOptions
/**
 * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
**/
var InstanceAttributeEnclaveOptions = /** @class */ (function (_super) {
    __extends(InstanceAttributeEnclaveOptions, _super);
    function InstanceAttributeEnclaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeEnclaveOptions.prototype, "enabled", void 0);
    return InstanceAttributeEnclaveOptions;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeEnclaveOptions = InstanceAttributeEnclaveOptions;
// InstanceAttributeInstanceInitiatedShutdownBehavior
/**
 * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
**/
var InstanceAttributeInstanceInitiatedShutdownBehavior = /** @class */ (function (_super) {
    __extends(InstanceAttributeInstanceInitiatedShutdownBehavior, _super);
    function InstanceAttributeInstanceInitiatedShutdownBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeInstanceInitiatedShutdownBehavior.prototype, "value", void 0);
    return InstanceAttributeInstanceInitiatedShutdownBehavior;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeInstanceInitiatedShutdownBehavior = InstanceAttributeInstanceInitiatedShutdownBehavior;
// InstanceAttributeInstanceType
/**
 * The instance type.
**/
var InstanceAttributeInstanceType = /** @class */ (function (_super) {
    __extends(InstanceAttributeInstanceType, _super);
    function InstanceAttributeInstanceType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeInstanceType.prototype, "value", void 0);
    return InstanceAttributeInstanceType;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeInstanceType = InstanceAttributeInstanceType;
// InstanceAttributeKernelId
/**
 * The kernel ID.
**/
var InstanceAttributeKernelId = /** @class */ (function (_super) {
    __extends(InstanceAttributeKernelId, _super);
    function InstanceAttributeKernelId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeKernelId.prototype, "value", void 0);
    return InstanceAttributeKernelId;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeKernelId = InstanceAttributeKernelId;
// InstanceAttributeRamdiskId
/**
 * The RAM disk ID.
**/
var InstanceAttributeRamdiskId = /** @class */ (function (_super) {
    __extends(InstanceAttributeRamdiskId, _super);
    function InstanceAttributeRamdiskId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeRamdiskId.prototype, "value", void 0);
    return InstanceAttributeRamdiskId;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeRamdiskId = InstanceAttributeRamdiskId;
// InstanceAttributeRootDeviceName
/**
 * The device name of the root device volume (for example, <code>/dev/sda1</code>).
**/
var InstanceAttributeRootDeviceName = /** @class */ (function (_super) {
    __extends(InstanceAttributeRootDeviceName, _super);
    function InstanceAttributeRootDeviceName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeRootDeviceName.prototype, "value", void 0);
    return InstanceAttributeRootDeviceName;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeRootDeviceName = InstanceAttributeRootDeviceName;
// InstanceAttributeSourceDestCheck
/**
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
**/
var InstanceAttributeSourceDestCheck = /** @class */ (function (_super) {
    __extends(InstanceAttributeSourceDestCheck, _super);
    function InstanceAttributeSourceDestCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeSourceDestCheck.prototype, "value", void 0);
    return InstanceAttributeSourceDestCheck;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeSourceDestCheck = InstanceAttributeSourceDestCheck;
// InstanceAttributeSriovNetSupport
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
var InstanceAttributeSriovNetSupport = /** @class */ (function (_super) {
    __extends(InstanceAttributeSriovNetSupport, _super);
    function InstanceAttributeSriovNetSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeSriovNetSupport.prototype, "value", void 0);
    return InstanceAttributeSriovNetSupport;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeSriovNetSupport = InstanceAttributeSriovNetSupport;
// InstanceAttributeUserData
/**
 * The user data.
**/
var InstanceAttributeUserData = /** @class */ (function (_super) {
    __extends(InstanceAttributeUserData, _super);
    function InstanceAttributeUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttributeUserData.prototype, "value", void 0);
    return InstanceAttributeUserData;
}(utils_1.SpeakeasyBase));
exports.InstanceAttributeUserData = InstanceAttributeUserData;
// InstanceAttribute
/**
 * Describes an instance attribute.
**/
var InstanceAttribute = /** @class */ (function (_super) {
    __extends(InstanceAttribute, _super);
    function InstanceAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttribute.prototype, "blockDeviceMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeDisableApiTermination)
    ], InstanceAttribute.prototype, "disableApiTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeEbsOptimized)
    ], InstanceAttribute.prototype, "ebsOptimized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeEnaSupport)
    ], InstanceAttribute.prototype, "enaSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeEnclaveOptions)
    ], InstanceAttribute.prototype, "enclaveOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttribute.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttribute.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeInstanceInitiatedShutdownBehavior)
    ], InstanceAttribute.prototype, "instanceInitiatedShutdownBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeInstanceType)
    ], InstanceAttribute.prototype, "instanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeKernelId)
    ], InstanceAttribute.prototype, "kernelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstanceAttribute.prototype, "productCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeRamdiskId)
    ], InstanceAttribute.prototype, "ramdiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeRootDeviceName)
    ], InstanceAttribute.prototype, "rootDeviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeSourceDestCheck)
    ], InstanceAttribute.prototype, "sourceDestCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeSriovNetSupport)
    ], InstanceAttribute.prototype, "sriovNetSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstanceAttributeUserData)
    ], InstanceAttribute.prototype, "userData", void 0);
    return InstanceAttribute;
}(utils_1.SpeakeasyBase));
exports.InstanceAttribute = InstanceAttribute;
