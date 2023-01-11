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
exports.UpdateSectionResponse = exports.UpdateSectionRequest = exports.UpdateSection200ApplicationJson = exports.UpdateSectionRequestBody = exports.UpdateSectionQueryParams = exports.UpdateSectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSectionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSectionPathParams, _super);
    function UpdateSectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=section_gid" }),
        __metadata("design:type", String)
    ], UpdateSectionPathParams.prototype, "sectionGid", void 0);
    return UpdateSectionPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSectionPathParams = UpdateSectionPathParams;
var UpdateSectionQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSectionQueryParams, _super);
    function UpdateSectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateSectionQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateSectionQueryParams.prototype, "optPretty", void 0);
    return UpdateSectionQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSectionQueryParams = UpdateSectionQueryParams;
var UpdateSectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSectionRequestBody, _super);
    function UpdateSectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.SectionRequest)
    ], UpdateSectionRequestBody.prototype, "data", void 0);
    return UpdateSectionRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateSectionRequestBody = UpdateSectionRequestBody;
var UpdateSection200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateSection200ApplicationJson, _super);
    function UpdateSection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.SectionResponse)
    ], UpdateSection200ApplicationJson.prototype, "data", void 0);
    return UpdateSection200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateSection200ApplicationJson = UpdateSection200ApplicationJson;
var UpdateSectionRequest = /** @class */ (function (_super) {
    __extends(UpdateSectionRequest, _super);
    function UpdateSectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSectionPathParams)
    ], UpdateSectionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSectionQueryParams)
    ], UpdateSectionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSectionRequestBody)
    ], UpdateSectionRequest.prototype, "request", void 0);
    return UpdateSectionRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSectionRequest = UpdateSectionRequest;
var UpdateSectionResponse = /** @class */ (function (_super) {
    __extends(UpdateSectionResponse, _super);
    function UpdateSectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateSectionResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSection200ApplicationJson)
    ], UpdateSectionResponse.prototype, "updateSection200ApplicationJSONObject", void 0);
    return UpdateSectionResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSectionResponse = UpdateSectionResponse;
