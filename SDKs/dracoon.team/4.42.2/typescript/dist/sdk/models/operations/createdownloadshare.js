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
exports.CreateDownloadShareResponse = exports.CreateDownloadShareRequest = exports.CreateDownloadShareXSdsDateFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
var CreateDownloadShareXSdsDateFormatEnum;
(function (CreateDownloadShareXSdsDateFormatEnum) {
    CreateDownloadShareXSdsDateFormatEnum["Utc"] = "UTC";
    CreateDownloadShareXSdsDateFormatEnum["Local"] = "LOCAL";
    CreateDownloadShareXSdsDateFormatEnum["Offset"] = "OFFSET";
    CreateDownloadShareXSdsDateFormatEnum["Epoch"] = "EPOCH";
    CreateDownloadShareXSdsDateFormatEnum["Leet"] = "LEET";
})(CreateDownloadShareXSdsDateFormatEnum = exports.CreateDownloadShareXSdsDateFormatEnum || (exports.CreateDownloadShareXSdsDateFormatEnum = {}));
var CreateDownloadShareRequest = /** @class */ (function (_super) {
    __extends(CreateDownloadShareRequest, _super);
    function CreateDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateDownloadShareRequest)
    ], CreateDownloadShareRequest.prototype, "createDownloadShareRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Sds-Auth-Token",
        }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "xSdsAuthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Sds-Date-Format",
        }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "xSdsDateFormat", void 0);
    return CreateDownloadShareRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDownloadShareRequest = CreateDownloadShareRequest;
var CreateDownloadShareResponse = /** @class */ (function (_super) {
    __extends(CreateDownloadShareResponse, _super);
    function CreateDownloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDownloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DownloadShare)
    ], CreateDownloadShareResponse.prototype, "downloadShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateDownloadShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDownloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDownloadShareResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDownloadShareResponse.prototype, "createDownloadShare400ApplicationJSONOneOf", void 0);
    return CreateDownloadShareResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDownloadShareResponse = CreateDownloadShareResponse;
