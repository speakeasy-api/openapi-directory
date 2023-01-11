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
exports.MigrationsSetLfsPreferenceResponse = exports.MigrationsSetLfsPreferenceRequest = exports.MigrationsSetLfsPreferenceRequestBody = exports.MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = exports.MigrationsSetLfsPreferencePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MigrationsSetLfsPreferencePathParams = /** @class */ (function (_super) {
    __extends(MigrationsSetLfsPreferencePathParams, _super);
    function MigrationsSetLfsPreferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], MigrationsSetLfsPreferencePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], MigrationsSetLfsPreferencePathParams.prototype, "repo", void 0);
    return MigrationsSetLfsPreferencePathParams;
}(utils_1.SpeakeasyBase));
exports.MigrationsSetLfsPreferencePathParams = MigrationsSetLfsPreferencePathParams;
var MigrationsSetLfsPreferenceRequestBodyUseLfsEnum;
(function (MigrationsSetLfsPreferenceRequestBodyUseLfsEnum) {
    MigrationsSetLfsPreferenceRequestBodyUseLfsEnum["OptIn"] = "opt_in";
    MigrationsSetLfsPreferenceRequestBodyUseLfsEnum["OptOut"] = "opt_out";
})(MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = exports.MigrationsSetLfsPreferenceRequestBodyUseLfsEnum || (exports.MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = {}));
var MigrationsSetLfsPreferenceRequestBody = /** @class */ (function (_super) {
    __extends(MigrationsSetLfsPreferenceRequestBody, _super);
    function MigrationsSetLfsPreferenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_lfs" }),
        __metadata("design:type", String)
    ], MigrationsSetLfsPreferenceRequestBody.prototype, "useLfs", void 0);
    return MigrationsSetLfsPreferenceRequestBody;
}(utils_1.SpeakeasyBase));
exports.MigrationsSetLfsPreferenceRequestBody = MigrationsSetLfsPreferenceRequestBody;
var MigrationsSetLfsPreferenceRequest = /** @class */ (function (_super) {
    __extends(MigrationsSetLfsPreferenceRequest, _super);
    function MigrationsSetLfsPreferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MigrationsSetLfsPreferencePathParams)
    ], MigrationsSetLfsPreferenceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MigrationsSetLfsPreferenceRequestBody)
    ], MigrationsSetLfsPreferenceRequest.prototype, "request", void 0);
    return MigrationsSetLfsPreferenceRequest;
}(utils_1.SpeakeasyBase));
exports.MigrationsSetLfsPreferenceRequest = MigrationsSetLfsPreferenceRequest;
var MigrationsSetLfsPreferenceResponse = /** @class */ (function (_super) {
    __extends(MigrationsSetLfsPreferenceResponse, _super);
    function MigrationsSetLfsPreferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MigrationsSetLfsPreferenceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MigrationsSetLfsPreferenceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Import)
    ], MigrationsSetLfsPreferenceResponse.prototype, "import", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], MigrationsSetLfsPreferenceResponse.prototype, "validationError", void 0);
    return MigrationsSetLfsPreferenceResponse;
}(utils_1.SpeakeasyBase));
exports.MigrationsSetLfsPreferenceResponse = MigrationsSetLfsPreferenceResponse;
