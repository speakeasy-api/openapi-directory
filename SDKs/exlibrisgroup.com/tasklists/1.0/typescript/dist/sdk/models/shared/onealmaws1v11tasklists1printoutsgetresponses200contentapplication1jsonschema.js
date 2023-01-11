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
exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema = exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout = exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus = exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter = void 0;
var utils_1 = require("../../../internal/utils");
// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter
/**
 * The printer.
**/
var Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter = /** @class */ (function (_super) {
    __extends(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter, _super);
    function Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter.prototype, "value", void 0);
    return Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter;
}(utils_1.SpeakeasyBase));
exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter = Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter;
// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus
/**
 * Status of the printout (Pending/Printed/Canceled).
**/
var Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus = /** @class */ (function (_super) {
    __extends(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus, _super);
    function Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus.prototype, "value", void 0);
    return Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus;
}(utils_1.SpeakeasyBase));
exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus = Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus;
// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout
/**
 * Printout Object.
**/
var Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout = /** @class */ (function (_super) {
    __extends(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout, _super);
    function Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=letter" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "letter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printer" }),
        __metadata("design:type", Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "printer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printout" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "printout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout.prototype, "status", void 0);
    return Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout;
}(utils_1.SpeakeasyBase));
exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout = Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout;
// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
/**
 * A list of printouts.
**/
var Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema, _super);
    function Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printout", elemType: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout }),
        __metadata("design:type", Array)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema.prototype, "printout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_record_count" }),
        __metadata("design:type", Number)
    ], Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema.prototype, "totalRecordCount", void 0);
    return Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema = Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
