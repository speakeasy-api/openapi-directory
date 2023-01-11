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
exports.PatientProblem = exports.PatientProblemStatusEnum = exports.PatientProblemIcdVersionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PatientProblemIcdVersionEnum;
(function (PatientProblemIcdVersionEnum) {
    PatientProblemIcdVersionEnum["Nine"] = "9";
    PatientProblemIcdVersionEnum["Ten"] = "10";
})(PatientProblemIcdVersionEnum = exports.PatientProblemIcdVersionEnum || (exports.PatientProblemIcdVersionEnum = {}));
var PatientProblemStatusEnum;
(function (PatientProblemStatusEnum) {
    PatientProblemStatusEnum["Active"] = "active";
    PatientProblemStatusEnum["Inactive"] = "inactive";
    PatientProblemStatusEnum["Resolved"] = "resolved";
})(PatientProblemStatusEnum = exports.PatientProblemStatusEnum || (exports.PatientProblemStatusEnum = {}));
var PatientProblem = /** @class */ (function (_super) {
    __extends(PatientProblem, _super);
    function PatientProblem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_changed" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "dateChanged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_diagnosis" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "dateDiagnosis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_onset" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "dateOnset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], PatientProblem.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icd_code" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "icdCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icd_version" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "icdVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PatientProblem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info_url" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "infoUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", Number)
    ], PatientProblem.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snomed_ct_code" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "snomedCtCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PatientProblem.prototype, "status", void 0);
    return PatientProblem;
}(utils_1.SpeakeasyBase));
exports.PatientProblem = PatientProblem;
