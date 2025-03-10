"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ModifyIpamResult = exports.ModifyIpamResultIpam = exports.ModifyIpamResultIpamTags = exports.ModifyIpamResultIpamStateEnum = exports.ModifyIpamResultIpamOperatingRegions = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p> <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
var ModifyIpamResultIpamOperatingRegions = /** @class */ (function (_super) {
    __extends(ModifyIpamResultIpamOperatingRegions, _super);
    function ModifyIpamResultIpamOperatingRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpamOperatingRegions.prototype, "regionName", void 0);
    return ModifyIpamResultIpamOperatingRegions;
}(utils_1.SpeakeasyBase));
exports.ModifyIpamResultIpamOperatingRegions = ModifyIpamResultIpamOperatingRegions;
/**
 * The state of the IPAM.
 */
var ModifyIpamResultIpamStateEnum;
(function (ModifyIpamResultIpamStateEnum) {
    ModifyIpamResultIpamStateEnum["CreateInProgress"] = "create-in-progress";
    ModifyIpamResultIpamStateEnum["CreateComplete"] = "create-complete";
    ModifyIpamResultIpamStateEnum["CreateFailed"] = "create-failed";
    ModifyIpamResultIpamStateEnum["ModifyInProgress"] = "modify-in-progress";
    ModifyIpamResultIpamStateEnum["ModifyComplete"] = "modify-complete";
    ModifyIpamResultIpamStateEnum["ModifyFailed"] = "modify-failed";
    ModifyIpamResultIpamStateEnum["DeleteInProgress"] = "delete-in-progress";
    ModifyIpamResultIpamStateEnum["DeleteComplete"] = "delete-complete";
    ModifyIpamResultIpamStateEnum["DeleteFailed"] = "delete-failed";
    ModifyIpamResultIpamStateEnum["IsolateInProgress"] = "isolate-in-progress";
    ModifyIpamResultIpamStateEnum["IsolateComplete"] = "isolate-complete";
    ModifyIpamResultIpamStateEnum["RestoreInProgress"] = "restore-in-progress";
})(ModifyIpamResultIpamStateEnum = exports.ModifyIpamResultIpamStateEnum || (exports.ModifyIpamResultIpamStateEnum = {}));
/**
 * Describes a tag.
 */
var ModifyIpamResultIpamTags = /** @class */ (function (_super) {
    __extends(ModifyIpamResultIpamTags, _super);
    function ModifyIpamResultIpamTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpamTags.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpamTags.prototype, "value", void 0);
    return ModifyIpamResultIpamTags;
}(utils_1.SpeakeasyBase));
exports.ModifyIpamResultIpamTags = ModifyIpamResultIpamTags;
/**
 * The results of the modification.
 */
var ModifyIpamResultIpam = /** @class */ (function (_super) {
    __extends(ModifyIpamResultIpam, _super);
    function ModifyIpamResultIpam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "defaultResourceDiscoveryAssociationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "defaultResourceDiscoveryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "ipamArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "ipamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "ipamRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: ModifyIpamResultIpamOperatingRegions }),
        __metadata("design:type", Array)
    ], ModifyIpamResultIpam.prototype, "operatingRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "privateDefaultScopeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "publicDefaultScopeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ModifyIpamResultIpam.prototype, "resourceDiscoveryAssociationCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ModifyIpamResultIpam.prototype, "scopeCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifyIpamResultIpam.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: ModifyIpamResultIpamTags }),
        __metadata("design:type", Array)
    ], ModifyIpamResultIpam.prototype, "tags", void 0);
    return ModifyIpamResultIpam;
}(utils_1.SpeakeasyBase));
exports.ModifyIpamResultIpam = ModifyIpamResultIpam;
/**
 * Success
 */
var ModifyIpamResult = /** @class */ (function (_super) {
    __extends(ModifyIpamResult, _super);
    function ModifyIpamResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyIpamResultIpam)
    ], ModifyIpamResult.prototype, "ipam", void 0);
    return ModifyIpamResult;
}(utils_1.SpeakeasyBase));
exports.ModifyIpamResult = ModifyIpamResult;
