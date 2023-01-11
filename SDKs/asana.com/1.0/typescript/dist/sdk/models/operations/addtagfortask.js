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
exports.AddTagForTaskResponse = exports.AddTagForTaskRequest = exports.AddTagForTask200ApplicationJson = exports.AddTagForTaskRequestBody = exports.AddTagForTaskQueryParams = exports.AddTagForTaskPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddTagForTaskPathParams = /** @class */ (function (_super) {
    __extends(AddTagForTaskPathParams, _super);
    function AddTagForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], AddTagForTaskPathParams.prototype, "taskGid", void 0);
    return AddTagForTaskPathParams;
}(utils_1.SpeakeasyBase));
exports.AddTagForTaskPathParams = AddTagForTaskPathParams;
var AddTagForTaskQueryParams = /** @class */ (function (_super) {
    __extends(AddTagForTaskQueryParams, _super);
    function AddTagForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddTagForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddTagForTaskQueryParams.prototype, "optPretty", void 0);
    return AddTagForTaskQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddTagForTaskQueryParams = AddTagForTaskQueryParams;
var AddTagForTaskRequestBody = /** @class */ (function (_super) {
    __extends(AddTagForTaskRequestBody, _super);
    function AddTagForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskAddTagRequest)
    ], AddTagForTaskRequestBody.prototype, "data", void 0);
    return AddTagForTaskRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddTagForTaskRequestBody = AddTagForTaskRequestBody;
var AddTagForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddTagForTask200ApplicationJson, _super);
    function AddTagForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AddTagForTask200ApplicationJson.prototype, "data", void 0);
    return AddTagForTask200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddTagForTask200ApplicationJson = AddTagForTask200ApplicationJson;
var AddTagForTaskRequest = /** @class */ (function (_super) {
    __extends(AddTagForTaskRequest, _super);
    function AddTagForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddTagForTaskPathParams)
    ], AddTagForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddTagForTaskQueryParams)
    ], AddTagForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddTagForTaskRequestBody)
    ], AddTagForTaskRequest.prototype, "request", void 0);
    return AddTagForTaskRequest;
}(utils_1.SpeakeasyBase));
exports.AddTagForTaskRequest = AddTagForTaskRequest;
var AddTagForTaskResponse = /** @class */ (function (_super) {
    __extends(AddTagForTaskResponse, _super);
    function AddTagForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddTagForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddTagForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddTagForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddTagForTask200ApplicationJson)
    ], AddTagForTaskResponse.prototype, "addTagForTask200ApplicationJSONObject", void 0);
    return AddTagForTaskResponse;
}(utils_1.SpeakeasyBase));
exports.AddTagForTaskResponse = AddTagForTaskResponse;
