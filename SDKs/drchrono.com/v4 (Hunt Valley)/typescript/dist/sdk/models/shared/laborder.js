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
exports.LabOrder = exports.LabOrderPriorityEnum = exports.LabOrderIcd10Code = void 0;
var utils_1 = require("../../../internal/utils");
var LabOrderIcd10Code = /** @class */ (function (_super) {
    __extends(LabOrderIcd10Code, _super);
    function LabOrderIcd10Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], LabOrderIcd10Code.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LabOrderIcd10Code.prototype, "description", void 0);
    return LabOrderIcd10Code;
}(utils_1.SpeakeasyBase));
exports.LabOrderIcd10Code = LabOrderIcd10Code;
var LabOrderPriorityEnum;
(function (LabOrderPriorityEnum) {
    LabOrderPriorityEnum["N"] = "N";
    LabOrderPriorityEnum["S"] = "S";
})(LabOrderPriorityEnum = exports.LabOrderPriorityEnum || (exports.LabOrderPriorityEnum = {}));
var LabOrder = /** @class */ (function (_super) {
    __extends(LabOrder, _super);
    function LabOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accession_number" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "accessionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], LabOrder.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documents" }),
        __metadata("design:type", Array)
    ], LabOrder.prototype, "documents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icd10_codes", elemType: LabOrderIcd10Code }),
        __metadata("design:type", Array)
    ], LabOrder.prototype, "icd10Codes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LabOrder.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", Number)
    ], LabOrder.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requisition_id" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "requisitionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sublab" }),
        __metadata("design:type", Number)
    ], LabOrder.prototype, "sublab", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], LabOrder.prototype, "timestamp", void 0);
    return LabOrder;
}(utils_1.SpeakeasyBase));
exports.LabOrder = LabOrder;
