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
exports.PatientDrug = exports.PatientDrugStatusEnum = exports.PatientDrugOrderStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PatientDrugOrderStatusEnum;
(function (PatientDrugOrderStatusEnum) {
    PatientDrugOrderStatusEnum["Unknown"] = "";
    PatientDrugOrderStatusEnum["Ordered"] = "Ordered";
    PatientDrugOrderStatusEnum["AdministeredDuringVisit"] = "Administered during visit";
    PatientDrugOrderStatusEnum["ElectronicERxSent"] = "Electronic eRx Sent";
    PatientDrugOrderStatusEnum["PhonedIntoPharmacy"] = "Phoned into Pharmacy";
    PatientDrugOrderStatusEnum["FaxedToPharmacy"] = "Faxed to Pharmacy";
    PatientDrugOrderStatusEnum["PaperRx"] = "Paper Rx";
    PatientDrugOrderStatusEnum["PrescriptionPrinted"] = "Prescription Printed";
    PatientDrugOrderStatusEnum["Discontinued"] = "Discontinued";
    PatientDrugOrderStatusEnum["PrescribedByOtherDr"] = "Prescribed by other Dr";
    PatientDrugOrderStatusEnum["OverTheCounter"] = "Over the Counter";
})(PatientDrugOrderStatusEnum = exports.PatientDrugOrderStatusEnum || (exports.PatientDrugOrderStatusEnum = {}));
var PatientDrugStatusEnum;
(function (PatientDrugStatusEnum) {
    PatientDrugStatusEnum["Active"] = "active";
    PatientDrugStatusEnum["Inactive"] = "inactive";
})(PatientDrugStatusEnum = exports.PatientDrugStatusEnum || (exports.PatientDrugStatusEnum = {}));
var PatientDrug = /** @class */ (function (_super) {
    __extends(PatientDrug, _super);
    function PatientDrug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appointment" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_prescribed" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "datePrescribed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_started_taking" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "dateStartedTaking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_stopped_taking" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "dateStoppedTaking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=daw" }),
        __metadata("design:type", Boolean)
    ], PatientDrug.prototype, "daw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dispense_quantity" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "dispenseQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dosage_quantity" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "dosageQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dosage_units" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "dosageUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indication" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "indication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ndc" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "ndc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_refills" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "numberRefills", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_status" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "orderStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", Number)
    ], PatientDrug.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pharmacy_note" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "pharmacyNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prn" }),
        __metadata("design:type", Boolean)
    ], PatientDrug.prototype, "prn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=route" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "route", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rxnorm" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "rxnorm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signature_note" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "signatureNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PatientDrug.prototype, "status", void 0);
    return PatientDrug;
}(utils_1.SpeakeasyBase));
exports.PatientDrug = PatientDrug;
