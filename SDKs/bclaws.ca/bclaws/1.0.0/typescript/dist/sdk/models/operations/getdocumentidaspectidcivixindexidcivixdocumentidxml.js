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
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum;
(function (GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum) {
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Complete"] = "complete";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Corpreg"] = "corpreg";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Bcgaz1"] = "bcgaz1";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Bcgaz2"] = "bcgaz2";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Oic"] = "oic";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Psl"] = "psl";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Ecb"] = "ecb";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["Hscr"] = "hscr";
    GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum["ArchOic"] = "arch_oic";
})(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum = exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum || (exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum = {}));
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=aspectId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams.prototype, "aspectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams.prototype, "civixDocumentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=civixIndexId" }),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams.prototype, "civixIndexId", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams;
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest.prototype, "pathParams", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest;
var GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse = /** @class */ (function (_super) {
    __extends(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse, _super);
    function GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse.prototype, "statusCode", void 0);
    return GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse;
}(utils_1.SpeakeasyBase));
exports.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse = GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse;
