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
exports.LabResult = exports.LabResultStatusEnum = exports.LabResultAbnormalStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LabResultAbnormalStatusEnum;
(function (LabResultAbnormalStatusEnum) {
    LabResultAbnormalStatusEnum["L"] = "L";
    LabResultAbnormalStatusEnum["Ll"] = "LL";
    LabResultAbnormalStatusEnum["H"] = "H";
    LabResultAbnormalStatusEnum["Hh"] = "HH";
    LabResultAbnormalStatusEnum["LessThan"] = "<";
    LabResultAbnormalStatusEnum["GreaterThan"] = ">";
    LabResultAbnormalStatusEnum["A"] = "A";
    LabResultAbnormalStatusEnum["Aa"] = "AA";
    LabResultAbnormalStatusEnum["S"] = "S";
    LabResultAbnormalStatusEnum["R"] = "R";
    LabResultAbnormalStatusEnum["I"] = "I";
    LabResultAbnormalStatusEnum["Neg"] = "NEG";
    LabResultAbnormalStatusEnum["Pos"] = "POS";
    LabResultAbnormalStatusEnum["N"] = "N";
    LabResultAbnormalStatusEnum["Unknown"] = "";
})(LabResultAbnormalStatusEnum = exports.LabResultAbnormalStatusEnum || (exports.LabResultAbnormalStatusEnum = {}));
var LabResultStatusEnum;
(function (LabResultStatusEnum) {
    LabResultStatusEnum["P"] = "P";
    LabResultStatusEnum["I"] = "I";
    LabResultStatusEnum["C"] = "C";
    LabResultStatusEnum["F"] = "F";
    LabResultStatusEnum["X"] = "X";
})(LabResultStatusEnum = exports.LabResultStatusEnum || (exports.LabResultStatusEnum = {}));
var LabResult = /** @class */ (function (_super) {
    __extends(LabResult, _super);
    function LabResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=abnormal_status" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "abnormalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=document" }),
        __metadata("design:type", Number)
    ], LabResult.prototype, "document", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_code" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "groupCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LabResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_abnormal" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "isAbnormal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lab_order" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "labOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lab_test" }),
        __metadata("design:type", Number)
    ], LabResult.prototype, "labTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=normal_range" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "normalRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=observation_code" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "observationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=observation_description" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "observationDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specimen_received" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "specimenReceived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=test_performed" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "testPerformed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], LabResult.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value_is_numeric" }),
        __metadata("design:type", Boolean)
    ], LabResult.prototype, "valueIsNumeric", void 0);
    return LabResult;
}(utils_1.SpeakeasyBase));
exports.LabResult = LabResult;
