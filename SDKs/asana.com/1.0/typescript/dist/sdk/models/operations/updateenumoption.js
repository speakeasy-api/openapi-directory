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
exports.UpdateEnumOptionResponse = exports.UpdateEnumOptionRequest = exports.UpdateEnumOption200ApplicationJson = exports.UpdateEnumOptionRequestBodyInput = exports.UpdateEnumOptionQueryParams = exports.UpdateEnumOptionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateEnumOptionPathParams = /** @class */ (function (_super) {
    __extends(UpdateEnumOptionPathParams, _super);
    function UpdateEnumOptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=enum_option_gid" }),
        __metadata("design:type", String)
    ], UpdateEnumOptionPathParams.prototype, "enumOptionGid", void 0);
    return UpdateEnumOptionPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOptionPathParams = UpdateEnumOptionPathParams;
var UpdateEnumOptionQueryParams = /** @class */ (function (_super) {
    __extends(UpdateEnumOptionQueryParams, _super);
    function UpdateEnumOptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateEnumOptionQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateEnumOptionQueryParams.prototype, "optPretty", void 0);
    return UpdateEnumOptionQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOptionQueryParams = UpdateEnumOptionQueryParams;
var UpdateEnumOptionRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateEnumOptionRequestBodyInput, _super);
    function UpdateEnumOptionRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOptionRequestInput)
    ], UpdateEnumOptionRequestBodyInput.prototype, "data", void 0);
    return UpdateEnumOptionRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOptionRequestBodyInput = UpdateEnumOptionRequestBodyInput;
var UpdateEnumOption200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateEnumOption200ApplicationJson, _super);
    function UpdateEnumOption200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOption)
    ], UpdateEnumOption200ApplicationJson.prototype, "data", void 0);
    return UpdateEnumOption200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOption200ApplicationJson = UpdateEnumOption200ApplicationJson;
var UpdateEnumOptionRequest = /** @class */ (function (_super) {
    __extends(UpdateEnumOptionRequest, _super);
    function UpdateEnumOptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnumOptionPathParams)
    ], UpdateEnumOptionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnumOptionQueryParams)
    ], UpdateEnumOptionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEnumOptionRequestBodyInput)
    ], UpdateEnumOptionRequest.prototype, "request", void 0);
    return UpdateEnumOptionRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOptionRequest = UpdateEnumOptionRequest;
var UpdateEnumOptionResponse = /** @class */ (function (_super) {
    __extends(UpdateEnumOptionResponse, _super);
    function UpdateEnumOptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateEnumOptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateEnumOptionResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateEnumOptionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnumOption200ApplicationJson)
    ], UpdateEnumOptionResponse.prototype, "updateEnumOption200ApplicationJSONObject", void 0);
    return UpdateEnumOptionResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateEnumOptionResponse = UpdateEnumOptionResponse;
