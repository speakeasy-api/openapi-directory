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
exports.SubscribePushDeviceToChannelResponse = exports.SubscribePushDeviceToChannelRequest = exports.SubscribePushDeviceToChannelRequests = exports.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 = exports.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 = exports.SubscribePushDeviceToChannelApplicationJson2 = exports.SubscribePushDeviceToChannelApplicationJson1 = exports.SubscribePushDeviceToChannelHeaders = exports.SubscribePushDeviceToChannelQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SubscribePushDeviceToChannelQueryParams = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelQueryParams, _super);
    function SubscribePushDeviceToChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelQueryParams.prototype, "format", void 0);
    return SubscribePushDeviceToChannelQueryParams;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelQueryParams = SubscribePushDeviceToChannelQueryParams;
var SubscribePushDeviceToChannelHeaders = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelHeaders, _super);
    function SubscribePushDeviceToChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Ably-Version" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelHeaders.prototype, "xAblyVersion", void 0);
    return SubscribePushDeviceToChannelHeaders;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelHeaders = SubscribePushDeviceToChannelHeaders;
var SubscribePushDeviceToChannelApplicationJson1 = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelApplicationJson1, _super);
    function SubscribePushDeviceToChannelApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationJson1.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationJson1.prototype, "deviceId", void 0);
    return SubscribePushDeviceToChannelApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelApplicationJson1 = SubscribePushDeviceToChannelApplicationJson1;
var SubscribePushDeviceToChannelApplicationJson2 = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelApplicationJson2, _super);
    function SubscribePushDeviceToChannelApplicationJson2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationJson2.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationJson2.prototype, "clientId", void 0);
    return SubscribePushDeviceToChannelApplicationJson2;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelApplicationJson2 = SubscribePushDeviceToChannelApplicationJson2;
var SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1, _super);
    function SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=channel;" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=deviceId;" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1.prototype, "deviceId", void 0);
    return SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 = SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1;
var SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2, _super);
    function SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=channel;" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=clientId;" }),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2.prototype, "clientId", void 0);
    return SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 = SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2;
var SubscribePushDeviceToChannelRequests = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelRequests, _super);
    function SubscribePushDeviceToChannelRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-msgpack" }),
        __metadata("design:type", Uint8Array)
    ], SubscribePushDeviceToChannelRequests.prototype, "applicationXMsgpack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], SubscribePushDeviceToChannelRequests.prototype, "oneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], SubscribePushDeviceToChannelRequests.prototype, "oneOf1", void 0);
    return SubscribePushDeviceToChannelRequests;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelRequests = SubscribePushDeviceToChannelRequests;
var SubscribePushDeviceToChannelRequest = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelRequest, _super);
    function SubscribePushDeviceToChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SubscribePushDeviceToChannelQueryParams)
    ], SubscribePushDeviceToChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SubscribePushDeviceToChannelHeaders)
    ], SubscribePushDeviceToChannelRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SubscribePushDeviceToChannelRequests)
    ], SubscribePushDeviceToChannelRequest.prototype, "request", void 0);
    return SubscribePushDeviceToChannelRequest;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelRequest = SubscribePushDeviceToChannelRequest;
var SubscribePushDeviceToChannelResponse = /** @class */ (function (_super) {
    __extends(SubscribePushDeviceToChannelResponse, _super);
    function SubscribePushDeviceToChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SubscribePushDeviceToChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SubscribePushDeviceToChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], SubscribePushDeviceToChannelResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SubscribePushDeviceToChannelResponse.prototype, "statusCode", void 0);
    return SubscribePushDeviceToChannelResponse;
}(utils_1.SpeakeasyBase));
exports.SubscribePushDeviceToChannelResponse = SubscribePushDeviceToChannelResponse;
