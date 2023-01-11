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
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum;
(function (GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum) {
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Complete"] = "complete";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Corpreg"] = "corpreg";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Bcgaz1"] = "bcgaz1";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Bcgaz2"] = "bcgaz2";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Oic"] = "oic";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Psl"] = "psl";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Ecb"] = "ecb";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["Hscr"] = "hscr";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum["ArchOic"] = "arch_oic";
})(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum || (exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum = {}));
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=aspectId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams.prototype, "aspectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams.prototype, "civixDocumentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=civixIndexId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams.prototype, "civixIndexId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=searchString" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams.prototype, "searchString", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams;
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest.prototype, "pathParams", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest;
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse.prototype, "statusCode", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse;
