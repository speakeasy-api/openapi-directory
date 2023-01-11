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
exports.CreateGoalMetricResponse = exports.CreateGoalMetricRequest = exports.CreateGoalMetric200ApplicationJson = exports.CreateGoalMetricRequestBodyInput = exports.CreateGoalMetricQueryParams = exports.CreateGoalMetricPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateGoalMetricPathParams = /** @class */ (function (_super) {
    __extends(CreateGoalMetricPathParams, _super);
    function CreateGoalMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], CreateGoalMetricPathParams.prototype, "goalGid", void 0);
    return CreateGoalMetricPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetricPathParams = CreateGoalMetricPathParams;
var CreateGoalMetricQueryParams = /** @class */ (function (_super) {
    __extends(CreateGoalMetricQueryParams, _super);
    function CreateGoalMetricQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateGoalMetricQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateGoalMetricQueryParams.prototype, "optPretty", void 0);
    return CreateGoalMetricQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetricQueryParams = CreateGoalMetricQueryParams;
var CreateGoalMetricRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateGoalMetricRequestBodyInput, _super);
    function CreateGoalMetricRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalMetricRequestInput)
    ], CreateGoalMetricRequestBodyInput.prototype, "data", void 0);
    return CreateGoalMetricRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetricRequestBodyInput = CreateGoalMetricRequestBodyInput;
var CreateGoalMetric200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGoalMetric200ApplicationJson, _super);
    function CreateGoalMetric200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], CreateGoalMetric200ApplicationJson.prototype, "data", void 0);
    return CreateGoalMetric200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetric200ApplicationJson = CreateGoalMetric200ApplicationJson;
var CreateGoalMetricRequest = /** @class */ (function (_super) {
    __extends(CreateGoalMetricRequest, _super);
    function CreateGoalMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGoalMetricPathParams)
    ], CreateGoalMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGoalMetricQueryParams)
    ], CreateGoalMetricRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGoalMetricRequestBodyInput)
    ], CreateGoalMetricRequest.prototype, "request", void 0);
    return CreateGoalMetricRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetricRequest = CreateGoalMetricRequest;
var CreateGoalMetricResponse = /** @class */ (function (_super) {
    __extends(CreateGoalMetricResponse, _super);
    function CreateGoalMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGoalMetricResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateGoalMetricResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGoalMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGoalMetric200ApplicationJson)
    ], CreateGoalMetricResponse.prototype, "createGoalMetric200ApplicationJSONObject", void 0);
    return CreateGoalMetricResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGoalMetricResponse = CreateGoalMetricResponse;
