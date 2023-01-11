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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListOfAspspsResponse = exports.GetListOfAspspsRequest = exports.GetListOfAspspsAspsps = exports.GetListOfAspspsAspspsAspsp = exports.GetListOfAspspsAspspsAspspCountry = exports.GetListOfAspspsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListOfAspspsQueryParams = /** @class */ (function (_super) {
    __extends(GetListOfAspspsQueryParams, _super);
    function GetListOfAspspsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetListOfAspspsQueryParams.prototype, "currency", void 0);
    return GetListOfAspspsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsQueryParams = GetListOfAspspsQueryParams;
var GetListOfAspspsAspspsAspspCountry = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspspsAspspCountry, _super);
    function GetListOfAspspsAspspsAspspCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspspCountry.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspspCountry.prototype, "description", void 0);
    return GetListOfAspspsAspspsAspspCountry;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsAspspsAspspCountry = GetListOfAspspsAspspsAspspCountry;
var GetListOfAspspsAspspsAspsp = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspspsAspsp, _super);
    function GetListOfAspspsAspspsAspsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "alias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspspUuid" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "aspspUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", GetListOfAspspsAspspsAspspCountry)
    ], GetListOfAspspsAspspsAspsp.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetListOfAspspsAspspsAspsp.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetListOfAspspsAspspsAspsp.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetListOfAspspsAspspsAspsp.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logoUrl" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "logoUrl", void 0);
    return GetListOfAspspsAspspsAspsp;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsAspspsAspsp = GetListOfAspspsAspspsAspsp;
var GetListOfAspspsAspsps = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspsps, _super);
    function GetListOfAspspsAspsps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspsps", elemType: GetListOfAspspsAspspsAspsp }),
        __metadata("design:type", Array)
    ], GetListOfAspspsAspsps.prototype, "aspsps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetListOfAspspsAspsps.prototype, "total", void 0);
    return GetListOfAspspsAspsps;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsAspsps = GetListOfAspspsAspsps;
var GetListOfAspspsRequest = /** @class */ (function (_super) {
    __extends(GetListOfAspspsRequest, _super);
    function GetListOfAspspsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfAspspsQueryParams)
    ], GetListOfAspspsRequest.prototype, "queryParams", void 0);
    return GetListOfAspspsRequest;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsRequest = GetListOfAspspsRequest;
var GetListOfAspspsResponse = /** @class */ (function (_super) {
    __extends(GetListOfAspspsResponse, _super);
    function GetListOfAspspsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfAspspsAspsps)
    ], GetListOfAspspsResponse.prototype, "aspsps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListOfAspspsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListOfAspspsResponse.prototype, "statusCode", void 0);
    return GetListOfAspspsResponse;
}(utils_1.SpeakeasyBase));
exports.GetListOfAspspsResponse = GetListOfAspspsResponse;
