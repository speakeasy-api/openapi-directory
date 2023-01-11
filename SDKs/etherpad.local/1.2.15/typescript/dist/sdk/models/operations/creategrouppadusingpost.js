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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupPadUsingPostResponse = exports.CreateGroupPadUsingPostRequest = exports.CreateGroupPadUsingPost500ApplicationJson = exports.CreateGroupPadUsingPost401ApplicationJson = exports.CreateGroupPadUsingPost400ApplicationJson = exports.CreateGroupPadUsingPost200ApplicationJson = exports.CreateGroupPadUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateGroupPadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPostQueryParams, _super);
    function CreateGroupPadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPostQueryParams.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padName" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPostQueryParams.prototype, "padName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPostQueryParams.prototype, "text", void 0);
    return CreateGroupPadUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPostQueryParams = CreateGroupPadUsingPostQueryParams;
var CreateGroupPadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPost200ApplicationJson, _super);
    function CreateGroupPadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPost200ApplicationJson = CreateGroupPadUsingPost200ApplicationJson;
var CreateGroupPadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPost400ApplicationJson, _super);
    function CreateGroupPadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPost400ApplicationJson = CreateGroupPadUsingPost400ApplicationJson;
var CreateGroupPadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPost401ApplicationJson, _super);
    function CreateGroupPadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPost401ApplicationJson = CreateGroupPadUsingPost401ApplicationJson;
var CreateGroupPadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPost500ApplicationJson, _super);
    function CreateGroupPadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPost500ApplicationJson = CreateGroupPadUsingPost500ApplicationJson;
var CreateGroupPadUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPostRequest, _super);
    function CreateGroupPadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingPostQueryParams)
    ], CreateGroupPadUsingPostRequest.prototype, "queryParams", void 0);
    return CreateGroupPadUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPostRequest = CreateGroupPadUsingPostRequest;
var CreateGroupPadUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingPostResponse, _super);
    function CreateGroupPadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGroupPadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingPost200ApplicationJson)
    ], CreateGroupPadUsingPostResponse.prototype, "createGroupPadUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingPost400ApplicationJson)
    ], CreateGroupPadUsingPostResponse.prototype, "createGroupPadUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingPost401ApplicationJson)
    ], CreateGroupPadUsingPostResponse.prototype, "createGroupPadUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingPost500ApplicationJson)
    ], CreateGroupPadUsingPostResponse.prototype, "createGroupPadUsingPOST500ApplicationJSONObject", void 0);
    return CreateGroupPadUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingPostResponse = CreateGroupPadUsingPostResponse;
