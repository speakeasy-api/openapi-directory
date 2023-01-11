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
exports.CreateNewVolumeResponse = exports.CreateNewVolumeRequest = exports.CreateNewVolume401ApplicationJson = exports.CreateNewVolumeRequestBody2Input = exports.CreateNewVolumeRequestBody1Input = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateNewVolumeRequestBody1Input = /** @class */ (function (_super) {
    __extends(CreateNewVolumeRequestBody1Input, _super);
    function CreateNewVolumeRequestBody1Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody1Input.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_label" }),
        __metadata("design:type", Object)
    ], CreateNewVolumeRequestBody1Input.prototype, "filesystemLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_type" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody1Input.prototype, "filesystemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody1Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody1Input.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], CreateNewVolumeRequestBody1Input.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody1Input.prototype, "snapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateNewVolumeRequestBody1Input.prototype, "tags", void 0);
    return CreateNewVolumeRequestBody1Input;
}(utils_1.SpeakeasyBase));
exports.CreateNewVolumeRequestBody1Input = CreateNewVolumeRequestBody1Input;
var CreateNewVolumeRequestBody2Input = /** @class */ (function (_super) {
    __extends(CreateNewVolumeRequestBody2Input, _super);
    function CreateNewVolumeRequestBody2Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody2Input.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_label" }),
        __metadata("design:type", Object)
    ], CreateNewVolumeRequestBody2Input.prototype, "filesystemLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesystem_type" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody2Input.prototype, "filesystemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody2Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody2Input.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], CreateNewVolumeRequestBody2Input.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], CreateNewVolumeRequestBody2Input.prototype, "snapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateNewVolumeRequestBody2Input.prototype, "tags", void 0);
    return CreateNewVolumeRequestBody2Input;
}(utils_1.SpeakeasyBase));
exports.CreateNewVolumeRequestBody2Input = CreateNewVolumeRequestBody2Input;
var CreateNewVolume401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateNewVolume401ApplicationJson, _super);
    function CreateNewVolume401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateNewVolume401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateNewVolume401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateNewVolume401ApplicationJson.prototype, "requestId", void 0);
    return CreateNewVolume401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateNewVolume401ApplicationJson = CreateNewVolume401ApplicationJson;
var CreateNewVolumeRequest = /** @class */ (function (_super) {
    __extends(CreateNewVolumeRequest, _super);
    function CreateNewVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateNewVolumeRequest.prototype, "request", void 0);
    return CreateNewVolumeRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNewVolumeRequest = CreateNewVolumeRequest;
var CreateNewVolumeResponse = /** @class */ (function (_super) {
    __extends(CreateNewVolumeResponse, _super);
    function CreateNewVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNewVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNewVolumeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNewVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNewVolumeResponse.prototype, "createNewVolume201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNewVolume401ApplicationJson)
    ], CreateNewVolumeResponse.prototype, "createNewVolume401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateNewVolumeResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateNewVolumeResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNewVolumeResponse = CreateNewVolumeResponse;
