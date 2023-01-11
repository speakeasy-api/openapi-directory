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
exports.GetMessagesResponse = exports.GetMessagesRequest = exports.GetMessagesSecurity = exports.GetMessagesQueryParams = exports.GetMessagesSortOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMessagesSortOrderEnum;
(function (GetMessagesSortOrderEnum) {
    GetMessagesSortOrderEnum["Ascending"] = "ASCENDING";
})(GetMessagesSortOrderEnum = exports.GetMessagesSortOrderEnum || (exports.GetMessagesSortOrderEnum = {}));
var GetMessagesQueryParams = /** @class */ (function (_super) {
    __extends(GetMessagesQueryParams, _super);
    function GetMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMessagesQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetMessagesQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetMessagesQueryParams.prototype, "sortOrder", void 0);
    return GetMessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMessagesQueryParams = GetMessagesQueryParams;
var GetMessagesSecurity = /** @class */ (function (_super) {
    __extends(GetMessagesSecurity, _super);
    function GetMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetMessagesSecurity.prototype, "basicAuth", void 0);
    return GetMessagesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetMessagesSecurity = GetMessagesSecurity;
var GetMessagesRequest = /** @class */ (function (_super) {
    __extends(GetMessagesRequest, _super);
    function GetMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMessagesQueryParams)
    ], GetMessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMessagesSecurity)
    ], GetMessagesRequest.prototype, "security", void 0);
    return GetMessagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetMessagesRequest = GetMessagesRequest;
var GetMessagesResponse = /** @class */ (function (_super) {
    __extends(GetMessagesResponse, _super);
    function GetMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetMessagesResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Message }),
        __metadata("design:type", Array)
    ], GetMessagesResponse.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMessagesResponse.prototype, "statusCode", void 0);
    return GetMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetMessagesResponse = GetMessagesResponse;
