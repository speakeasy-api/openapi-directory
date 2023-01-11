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
exports.SoapNoteCustomReport = exports.SoapNoteCustomReportSoapNoteCustomReport = exports.SoapNoteCustomReportClinicalNoteField = void 0;
var utils_1 = require("../../../internal/utils");
// SoapNoteCustomReportClinicalNoteField
/**
 * Array of field objects
**/
var SoapNoteCustomReportClinicalNoteField = /** @class */ (function (_super) {
    __extends(SoapNoteCustomReportClinicalNoteField, _super);
    function SoapNoteCustomReportClinicalNoteField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clinical_note_template" }),
        __metadata("design:type", Number)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "clinicalNoteTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_type" }),
        __metadata("design:type", String)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "dataType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], SoapNoteCustomReportClinicalNoteField.prototype, "required", void 0);
    return SoapNoteCustomReportClinicalNoteField;
}(utils_1.SpeakeasyBase));
exports.SoapNoteCustomReportClinicalNoteField = SoapNoteCustomReportClinicalNoteField;
// SoapNoteCustomReportSoapNoteCustomReport
/**
 * Order of templates
**/
var SoapNoteCustomReportSoapNoteCustomReport = /** @class */ (function (_super) {
    __extends(SoapNoteCustomReportSoapNoteCustomReport, _super);
    function SoapNoteCustomReportSoapNoteCustomReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_complete_note" }),
        __metadata("design:type", Number)
    ], SoapNoteCustomReportSoapNoteCustomReport.prototype, "onCompleteNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_ipad" }),
        __metadata("design:type", Number)
    ], SoapNoteCustomReportSoapNoteCustomReport.prototype, "onIpad", void 0);
    return SoapNoteCustomReportSoapNoteCustomReport;
}(utils_1.SpeakeasyBase));
exports.SoapNoteCustomReportSoapNoteCustomReport = SoapNoteCustomReportSoapNoteCustomReport;
var SoapNoteCustomReport = /** @class */ (function (_super) {
    __extends(SoapNoteCustomReport, _super);
    function SoapNoteCustomReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], SoapNoteCustomReport.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clinical_note_fields", elemType: SoapNoteCustomReportClinicalNoteField }),
        __metadata("design:type", Array)
    ], SoapNoteCustomReport.prototype, "clinicalNoteFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", String)
    ], SoapNoteCustomReport.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SoapNoteCustomReport.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_onpatient" }),
        __metadata("design:type", Boolean)
    ], SoapNoteCustomReport.prototype, "isOnpatient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_persistent" }),
        __metadata("design:type", Boolean)
    ], SoapNoteCustomReport.prototype, "isPersistent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SoapNoteCustomReport.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", SoapNoteCustomReportSoapNoteCustomReport)
    ], SoapNoteCustomReport.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], SoapNoteCustomReport.prototype, "updatedAt", void 0);
    return SoapNoteCustomReport;
}(utils_1.SpeakeasyBase));
exports.SoapNoteCustomReport = SoapNoteCustomReport;
