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
exports.SearchStatusboardResponse = exports.SearchStatusboardRequest = void 0;
var utils_1 = require("../../../internal/utils");
var SearchStatusboardRequest = /** @class */ (function (_super) {
    __extends(SearchStatusboardRequest, _super);
    function SearchStatusboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=changedate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "changedateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=changedate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "changedateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=createdate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "createdateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=createdate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "createdateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=description",
        }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=filesuffix",
        }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "filesuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fromdate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=maxlatitude",
        }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "maxlatitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=maxlongitude",
        }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "maxlongitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=minlatitude",
        }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "minlatitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=minlongitude",
        }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "minlongitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=search.db_statusboard.status",
        }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "searchDbStatusboardStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=search.db_statusboard.what",
        }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "searchDbStatusboardWhat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchStatusboardRequest.prototype, "skip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchStatusboardRequest.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=todate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], SearchStatusboardRequest.prototype, "todate", void 0);
    return SearchStatusboardRequest;
}(utils_1.SpeakeasyBase));
exports.SearchStatusboardRequest = SearchStatusboardRequest;
var SearchStatusboardResponse = /** @class */ (function (_super) {
    __extends(SearchStatusboardResponse, _super);
    function SearchStatusboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchStatusboardResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchStatusboardResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SearchStatusboardResponse.prototype, "rawResponse", void 0);
    return SearchStatusboardResponse;
}(utils_1.SpeakeasyBase));
exports.SearchStatusboardResponse = SearchStatusboardResponse;
