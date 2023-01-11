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
exports.RemoveDependentsForTaskResponse = exports.RemoveDependentsForTaskRequest = exports.RemoveDependentsForTask200ApplicationJson = exports.RemoveDependentsForTaskRequestBody = exports.RemoveDependentsForTaskQueryParams = exports.RemoveDependentsForTaskPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveDependentsForTaskPathParams = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskPathParams, _super);
    function RemoveDependentsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], RemoveDependentsForTaskPathParams.prototype, "taskGid", void 0);
    return RemoveDependentsForTaskPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTaskPathParams = RemoveDependentsForTaskPathParams;
var RemoveDependentsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskQueryParams, _super);
    function RemoveDependentsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveDependentsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveDependentsForTaskQueryParams.prototype, "optPretty", void 0);
    return RemoveDependentsForTaskQueryParams;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTaskQueryParams = RemoveDependentsForTaskQueryParams;
var RemoveDependentsForTaskRequestBody = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskRequestBody, _super);
    function RemoveDependentsForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ModifyDependentsRequest)
    ], RemoveDependentsForTaskRequestBody.prototype, "data", void 0);
    return RemoveDependentsForTaskRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTaskRequestBody = RemoveDependentsForTaskRequestBody;
var RemoveDependentsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTask200ApplicationJson, _super);
    function RemoveDependentsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], RemoveDependentsForTask200ApplicationJson.prototype, "data", void 0);
    return RemoveDependentsForTask200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTask200ApplicationJson = RemoveDependentsForTask200ApplicationJson;
var RemoveDependentsForTaskRequest = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskRequest, _super);
    function RemoveDependentsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveDependentsForTaskPathParams)
    ], RemoveDependentsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveDependentsForTaskQueryParams)
    ], RemoveDependentsForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveDependentsForTaskRequestBody)
    ], RemoveDependentsForTaskRequest.prototype, "request", void 0);
    return RemoveDependentsForTaskRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTaskRequest = RemoveDependentsForTaskRequest;
var RemoveDependentsForTaskResponse = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskResponse, _super);
    function RemoveDependentsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveDependentsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveDependentsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveDependentsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveDependentsForTask200ApplicationJson)
    ], RemoveDependentsForTaskResponse.prototype, "removeDependentsForTask200ApplicationJSONObject", void 0);
    return RemoveDependentsForTaskResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveDependentsForTaskResponse = RemoveDependentsForTaskResponse;
