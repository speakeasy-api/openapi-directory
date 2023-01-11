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
exports.GetAlmawsV1TaskListsPrintoutsResponse = exports.GetAlmawsV1TaskListsPrintoutsRequest = exports.GetAlmawsV1TaskListsPrintouts200ApplicationJson = exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout = exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus = exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter = exports.GetAlmawsV1TaskListsPrintoutsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAlmawsV1TaskListsPrintoutsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintoutsQueryParams, _super);
    function GetAlmawsV1TaskListsPrintoutsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=letter" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "letter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=printer_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "printerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=printout_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "printoutId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintoutsQueryParams.prototype, "status", void 0);
    return GetAlmawsV1TaskListsPrintoutsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintoutsQueryParams = GetAlmawsV1TaskListsPrintoutsQueryParams;
// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter
/**
 * The printer.
**/
var GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter, _super);
    function GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter.prototype, "value", void 0);
    return GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter = GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter;
// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus
/**
 * Status of the printout (Pending/Printed/Canceled).
**/
var GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus, _super);
    function GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus.prototype, "value", void 0);
    return GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus = GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus;
// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout
/**
 * Printout Object.
**/
var GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout, _super);
    function GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=letter" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "letter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printer" }),
        __metadata("design:type", GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "printer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printout" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "printout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout.prototype, "status", void 0);
    return GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout = GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout;
// GetAlmawsV1TaskListsPrintouts200ApplicationJson
/**
 * A list of printouts.
**/
var GetAlmawsV1TaskListsPrintouts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintouts200ApplicationJson, _super);
    function GetAlmawsV1TaskListsPrintouts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printout", elemType: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJson.prototype, "printout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_record_count" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsPrintouts200ApplicationJson.prototype, "totalRecordCount", void 0);
    return GetAlmawsV1TaskListsPrintouts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintouts200ApplicationJson = GetAlmawsV1TaskListsPrintouts200ApplicationJson;
var GetAlmawsV1TaskListsPrintoutsRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintoutsRequest, _super);
    function GetAlmawsV1TaskListsPrintoutsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsPrintoutsQueryParams)
    ], GetAlmawsV1TaskListsPrintoutsRequest.prototype, "queryParams", void 0);
    return GetAlmawsV1TaskListsPrintoutsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintoutsRequest = GetAlmawsV1TaskListsPrintoutsRequest;
var GetAlmawsV1TaskListsPrintoutsResponse = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsPrintoutsResponse, _super);
    function GetAlmawsV1TaskListsPrintoutsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAlmawsV1TaskListsPrintoutsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsPrintoutsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAlmawsV1TaskListsPrintoutsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsPrintoutsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsPrintouts200ApplicationJson)
    ], GetAlmawsV1TaskListsPrintoutsResponse.prototype, "getAlmawsV1TaskListsPrintouts200ApplicationJSONObject", void 0);
    return GetAlmawsV1TaskListsPrintoutsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsPrintoutsResponse = GetAlmawsV1TaskListsPrintoutsResponse;
