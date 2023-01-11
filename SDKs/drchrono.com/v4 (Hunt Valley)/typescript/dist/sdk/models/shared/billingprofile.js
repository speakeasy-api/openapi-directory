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
exports.BillingProfile = exports.BillingProfileHcpcsCodes = exports.BillingProfileHcpcsCodesNdcCode = exports.BillingProfileHcpcsCodesNdcCodeUnitsEnum = exports.BillingProfileCustomProcedureCodes = exports.BillingProfileCptCodes = exports.BillingProfileCptCodesNdcCode = exports.BillingProfileCptCodesNdcCodeUnitsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var BillingProfileCptCodesNdcCodeUnitsEnum;
(function (BillingProfileCptCodesNdcCodeUnitsEnum) {
    BillingProfileCptCodesNdcCodeUnitsEnum["F2"] = "F2";
    BillingProfileCptCodesNdcCodeUnitsEnum["Gr"] = "GR";
    BillingProfileCptCodesNdcCodeUnitsEnum["Me"] = "ME";
    BillingProfileCptCodesNdcCodeUnitsEnum["Ml"] = "ML";
    BillingProfileCptCodesNdcCodeUnitsEnum["Un"] = "UN";
})(BillingProfileCptCodesNdcCodeUnitsEnum = exports.BillingProfileCptCodesNdcCodeUnitsEnum || (exports.BillingProfileCptCodesNdcCodeUnitsEnum = {}));
// BillingProfileCptCodesNdcCode
/**
 * NDC code object
**/
var BillingProfileCptCodesNdcCode = /** @class */ (function (_super) {
    __extends(BillingProfileCptCodesNdcCode, _super);
    function BillingProfileCptCodesNdcCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ndc_package_code" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodesNdcCode.prototype, "ndcPackageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodesNdcCode.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodesNdcCode.prototype, "units", void 0);
    return BillingProfileCptCodesNdcCode;
}(utils_1.SpeakeasyBase));
exports.BillingProfileCptCodesNdcCode = BillingProfileCptCodesNdcCode;
// BillingProfileCptCodes
/**
 * CPT Code object
**/
var BillingProfileCptCodes = /** @class */ (function (_super) {
    __extends(BillingProfileCptCodes, _super);
    function BillingProfileCptCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodes.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnosis_pointers_icd10" }),
        __metadata("design:type", Array)
    ], BillingProfileCptCodes.prototype, "diagnosisPointersIcd10", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnosis_pointers_icd9" }),
        __metadata("design:type", Array)
    ], BillingProfileCptCodes.prototype, "diagnosisPointersIcd9", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], BillingProfileCptCodes.prototype, "modifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ndc_code", elemType: BillingProfileCptCodesNdcCode }),
        __metadata("design:type", Array)
    ], BillingProfileCptCodes.prototype, "ndcCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodes.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], BillingProfileCptCodes.prototype, "quantity", void 0);
    return BillingProfileCptCodes;
}(utils_1.SpeakeasyBase));
exports.BillingProfileCptCodes = BillingProfileCptCodes;
// BillingProfileCustomProcedureCodes
/**
 * Custom procedure code object
**/
var BillingProfileCustomProcedureCodes = /** @class */ (function (_super) {
    __extends(BillingProfileCustomProcedureCodes, _super);
    function BillingProfileCustomProcedureCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillingProfileCustomProcedureCodes.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], BillingProfileCustomProcedureCodes.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], BillingProfileCustomProcedureCodes.prototype, "quantity", void 0);
    return BillingProfileCustomProcedureCodes;
}(utils_1.SpeakeasyBase));
exports.BillingProfileCustomProcedureCodes = BillingProfileCustomProcedureCodes;
var BillingProfileHcpcsCodesNdcCodeUnitsEnum;
(function (BillingProfileHcpcsCodesNdcCodeUnitsEnum) {
    BillingProfileHcpcsCodesNdcCodeUnitsEnum["F2"] = "F2";
    BillingProfileHcpcsCodesNdcCodeUnitsEnum["Gr"] = "GR";
    BillingProfileHcpcsCodesNdcCodeUnitsEnum["Me"] = "ME";
    BillingProfileHcpcsCodesNdcCodeUnitsEnum["Ml"] = "ML";
    BillingProfileHcpcsCodesNdcCodeUnitsEnum["Un"] = "UN";
})(BillingProfileHcpcsCodesNdcCodeUnitsEnum = exports.BillingProfileHcpcsCodesNdcCodeUnitsEnum || (exports.BillingProfileHcpcsCodesNdcCodeUnitsEnum = {}));
// BillingProfileHcpcsCodesNdcCode
/**
 * NDC code object
**/
var BillingProfileHcpcsCodesNdcCode = /** @class */ (function (_super) {
    __extends(BillingProfileHcpcsCodesNdcCode, _super);
    function BillingProfileHcpcsCodesNdcCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ndc_package_code" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodesNdcCode.prototype, "ndcPackageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodesNdcCode.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodesNdcCode.prototype, "units", void 0);
    return BillingProfileHcpcsCodesNdcCode;
}(utils_1.SpeakeasyBase));
exports.BillingProfileHcpcsCodesNdcCode = BillingProfileHcpcsCodesNdcCode;
// BillingProfileHcpcsCodes
/**
 * HCPCS code object
**/
var BillingProfileHcpcsCodes = /** @class */ (function (_super) {
    __extends(BillingProfileHcpcsCodes, _super);
    function BillingProfileHcpcsCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodes.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnosis_pointers_icd10" }),
        __metadata("design:type", Array)
    ], BillingProfileHcpcsCodes.prototype, "diagnosisPointersIcd10", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnosis_pointers_icd9" }),
        __metadata("design:type", Array)
    ], BillingProfileHcpcsCodes.prototype, "diagnosisPointersIcd9", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], BillingProfileHcpcsCodes.prototype, "modifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ndc_code", elemType: BillingProfileHcpcsCodesNdcCode }),
        __metadata("design:type", Array)
    ], BillingProfileHcpcsCodes.prototype, "ndcCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodes.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], BillingProfileHcpcsCodes.prototype, "quantity", void 0);
    return BillingProfileHcpcsCodes;
}(utils_1.SpeakeasyBase));
exports.BillingProfileHcpcsCodes = BillingProfileHcpcsCodes;
var BillingProfile = /** @class */ (function (_super) {
    __extends(BillingProfile, _super);
    function BillingProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], BillingProfile.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpt_codes", elemType: BillingProfileCptCodes }),
        __metadata("design:type", Array)
    ], BillingProfile.prototype, "cptCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_procedure_codes", elemType: BillingProfileCustomProcedureCodes }),
        __metadata("design:type", Array)
    ], BillingProfile.prototype, "customProcedureCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hcpcs_codes", elemType: BillingProfileHcpcsCodes }),
        __metadata("design:type", Array)
    ], BillingProfile.prototype, "hcpcsCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icd10_codes" }),
        __metadata("design:type", Array)
    ], BillingProfile.prototype, "icd10Codes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icd9_codes" }),
        __metadata("design:type", Array)
    ], BillingProfile.prototype, "icd9Codes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BillingProfile.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "updatedAt", void 0);
    return BillingProfile;
}(utils_1.SpeakeasyBase));
exports.BillingProfile = BillingProfile;
