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
exports.ActivityListPublicEventsResponse = exports.ActivityListPublicEventsRequest = exports.ActivityListPublicEvents503ApplicationJson = exports.ActivityListPublicEventsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ActivityListPublicEventsQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsQueryParams, _super);
    function ActivityListPublicEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsQueryParams.prototype, "perPage", void 0);
    return ActivityListPublicEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ActivityListPublicEventsQueryParams = ActivityListPublicEventsQueryParams;
var ActivityListPublicEvents503ApplicationJson = /** @class */ (function (_super) {
    __extends(ActivityListPublicEvents503ApplicationJson, _super);
    function ActivityListPublicEvents503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ActivityListPublicEvents503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ActivityListPublicEvents503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ActivityListPublicEvents503ApplicationJson.prototype, "message", void 0);
    return ActivityListPublicEvents503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ActivityListPublicEvents503ApplicationJson = ActivityListPublicEvents503ApplicationJson;
var ActivityListPublicEventsRequest = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsRequest, _super);
    function ActivityListPublicEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivityListPublicEventsQueryParams)
    ], ActivityListPublicEventsRequest.prototype, "queryParams", void 0);
    return ActivityListPublicEventsRequest;
}(utils_1.SpeakeasyBase));
exports.ActivityListPublicEventsRequest = ActivityListPublicEventsRequest;
var ActivityListPublicEventsResponse = /** @class */ (function (_super) {
    __extends(ActivityListPublicEventsResponse, _super);
    function ActivityListPublicEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActivityListPublicEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActivityListPublicEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivityListPublicEvents503ApplicationJson)
    ], ActivityListPublicEventsResponse.prototype, "activityListPublicEvents503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ActivityListPublicEventsResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ActivityListPublicEventsResponse.prototype, "events", void 0);
    return ActivityListPublicEventsResponse;
}(utils_1.SpeakeasyBase));
exports.ActivityListPublicEventsResponse = ActivityListPublicEventsResponse;
