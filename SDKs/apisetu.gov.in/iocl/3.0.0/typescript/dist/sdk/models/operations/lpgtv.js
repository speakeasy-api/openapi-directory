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
exports.LpgtvResponse = exports.LpgtvRequest = exports.Lpgtv504ApplicationJson = exports.Lpgtv504ApplicationJsonErrorDescriptionEnum = exports.Lpgtv504ApplicationJsonErrorEnum = exports.Lpgtv503ApplicationJson = exports.Lpgtv503ApplicationJsonErrorDescriptionEnum = exports.Lpgtv503ApplicationJsonErrorEnum = exports.Lpgtv502ApplicationJson = exports.Lpgtv502ApplicationJsonErrorDescriptionEnum = exports.Lpgtv502ApplicationJsonErrorEnum = exports.Lpgtv500ApplicationJson = exports.Lpgtv500ApplicationJsonErrorDescriptionEnum = exports.Lpgtv500ApplicationJsonErrorEnum = exports.Lpgtv404ApplicationJson = exports.Lpgtv404ApplicationJsonErrorDescriptionEnum = exports.Lpgtv404ApplicationJsonErrorEnum = exports.Lpgtv401ApplicationJson = exports.Lpgtv401ApplicationJsonErrorDescriptionEnum = exports.Lpgtv401ApplicationJsonErrorEnum = exports.Lpgtv400ApplicationJson = exports.Lpgtv400ApplicationJsonErrorDescriptionEnum = exports.Lpgtv400ApplicationJsonErrorEnum = exports.LpgtvSecurity = exports.LpgtvRequestBody = exports.LpgtvRequestBodyFormatEnum = exports.LpgtvRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LpgtvRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LpgtvRequestBodyCertificateParameters, _super);
    function LpgtvRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], LpgtvRequestBodyCertificateParameters.prototype, "uid", void 0);
    return LpgtvRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LpgtvRequestBodyCertificateParameters = LpgtvRequestBodyCertificateParameters;
var LpgtvRequestBodyFormatEnum;
(function (LpgtvRequestBodyFormatEnum) {
    LpgtvRequestBodyFormatEnum["Pdf"] = "pdf";
})(LpgtvRequestBodyFormatEnum = exports.LpgtvRequestBodyFormatEnum || (exports.LpgtvRequestBodyFormatEnum = {}));
var LpgtvRequestBody = /** @class */ (function (_super) {
    __extends(LpgtvRequestBody, _super);
    function LpgtvRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LpgtvRequestBodyCertificateParameters)
    ], LpgtvRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LpgtvRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LpgtvRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LpgtvRequestBody.prototype, "txnId", void 0);
    return LpgtvRequestBody;
}(utils_1.SpeakeasyBase));
exports.LpgtvRequestBody = LpgtvRequestBody;
var LpgtvSecurity = /** @class */ (function (_super) {
    __extends(LpgtvSecurity, _super);
    function LpgtvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LpgtvSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LpgtvSecurity.prototype, "clientId", void 0);
    return LpgtvSecurity;
}(utils_1.SpeakeasyBase));
exports.LpgtvSecurity = LpgtvSecurity;
var Lpgtv400ApplicationJsonErrorEnum;
(function (Lpgtv400ApplicationJsonErrorEnum) {
    Lpgtv400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lpgtv400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lpgtv400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lpgtv400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lpgtv400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lpgtv400ApplicationJsonErrorEnum = exports.Lpgtv400ApplicationJsonErrorEnum || (exports.Lpgtv400ApplicationJsonErrorEnum = {}));
var Lpgtv400ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv400ApplicationJsonErrorDescriptionEnum) {
    Lpgtv400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lpgtv400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lpgtv400ApplicationJsonErrorDescriptionEnum = exports.Lpgtv400ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv400ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv400ApplicationJson, _super);
    function Lpgtv400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv400ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv400ApplicationJson = Lpgtv400ApplicationJson;
var Lpgtv401ApplicationJsonErrorEnum;
(function (Lpgtv401ApplicationJsonErrorEnum) {
    Lpgtv401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lpgtv401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lpgtv401ApplicationJsonErrorEnum = exports.Lpgtv401ApplicationJsonErrorEnum || (exports.Lpgtv401ApplicationJsonErrorEnum = {}));
var Lpgtv401ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv401ApplicationJsonErrorDescriptionEnum) {
    Lpgtv401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lpgtv401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lpgtv401ApplicationJsonErrorDescriptionEnum = exports.Lpgtv401ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv401ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv401ApplicationJson, _super);
    function Lpgtv401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv401ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv401ApplicationJson = Lpgtv401ApplicationJson;
var Lpgtv404ApplicationJsonErrorEnum;
(function (Lpgtv404ApplicationJsonErrorEnum) {
    Lpgtv404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lpgtv404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lpgtv404ApplicationJsonErrorEnum = exports.Lpgtv404ApplicationJsonErrorEnum || (exports.Lpgtv404ApplicationJsonErrorEnum = {}));
var Lpgtv404ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv404ApplicationJsonErrorDescriptionEnum) {
    Lpgtv404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lpgtv404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lpgtv404ApplicationJsonErrorDescriptionEnum = exports.Lpgtv404ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv404ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv404ApplicationJson, _super);
    function Lpgtv404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv404ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv404ApplicationJson = Lpgtv404ApplicationJson;
var Lpgtv500ApplicationJsonErrorEnum;
(function (Lpgtv500ApplicationJsonErrorEnum) {
    Lpgtv500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lpgtv500ApplicationJsonErrorEnum = exports.Lpgtv500ApplicationJsonErrorEnum || (exports.Lpgtv500ApplicationJsonErrorEnum = {}));
var Lpgtv500ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv500ApplicationJsonErrorDescriptionEnum) {
    Lpgtv500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lpgtv500ApplicationJsonErrorDescriptionEnum = exports.Lpgtv500ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv500ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv500ApplicationJson, _super);
    function Lpgtv500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv500ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv500ApplicationJson = Lpgtv500ApplicationJson;
var Lpgtv502ApplicationJsonErrorEnum;
(function (Lpgtv502ApplicationJsonErrorEnum) {
    Lpgtv502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lpgtv502ApplicationJsonErrorEnum = exports.Lpgtv502ApplicationJsonErrorEnum || (exports.Lpgtv502ApplicationJsonErrorEnum = {}));
var Lpgtv502ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv502ApplicationJsonErrorDescriptionEnum) {
    Lpgtv502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lpgtv502ApplicationJsonErrorDescriptionEnum = exports.Lpgtv502ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv502ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv502ApplicationJson, _super);
    function Lpgtv502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv502ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv502ApplicationJson = Lpgtv502ApplicationJson;
var Lpgtv503ApplicationJsonErrorEnum;
(function (Lpgtv503ApplicationJsonErrorEnum) {
    Lpgtv503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lpgtv503ApplicationJsonErrorEnum = exports.Lpgtv503ApplicationJsonErrorEnum || (exports.Lpgtv503ApplicationJsonErrorEnum = {}));
var Lpgtv503ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv503ApplicationJsonErrorDescriptionEnum) {
    Lpgtv503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lpgtv503ApplicationJsonErrorDescriptionEnum = exports.Lpgtv503ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv503ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv503ApplicationJson, _super);
    function Lpgtv503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv503ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv503ApplicationJson = Lpgtv503ApplicationJson;
var Lpgtv504ApplicationJsonErrorEnum;
(function (Lpgtv504ApplicationJsonErrorEnum) {
    Lpgtv504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lpgtv504ApplicationJsonErrorEnum = exports.Lpgtv504ApplicationJsonErrorEnum || (exports.Lpgtv504ApplicationJsonErrorEnum = {}));
var Lpgtv504ApplicationJsonErrorDescriptionEnum;
(function (Lpgtv504ApplicationJsonErrorDescriptionEnum) {
    Lpgtv504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lpgtv504ApplicationJsonErrorDescriptionEnum = exports.Lpgtv504ApplicationJsonErrorDescriptionEnum || (exports.Lpgtv504ApplicationJsonErrorDescriptionEnum = {}));
var Lpgtv504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lpgtv504ApplicationJson, _super);
    function Lpgtv504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lpgtv504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lpgtv504ApplicationJson.prototype, "errorDescription", void 0);
    return Lpgtv504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lpgtv504ApplicationJson = Lpgtv504ApplicationJson;
var LpgtvRequest = /** @class */ (function (_super) {
    __extends(LpgtvRequest, _super);
    function LpgtvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LpgtvRequestBody)
    ], LpgtvRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LpgtvSecurity)
    ], LpgtvRequest.prototype, "security", void 0);
    return LpgtvRequest;
}(utils_1.SpeakeasyBase));
exports.LpgtvRequest = LpgtvRequest;
var LpgtvResponse = /** @class */ (function (_super) {
    __extends(LpgtvResponse, _super);
    function LpgtvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LpgtvResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LpgtvResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv400ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv401ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv404ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv500ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv502ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv503ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lpgtv504ApplicationJson)
    ], LpgtvResponse.prototype, "lpgtv504ApplicationJSONObject", void 0);
    return LpgtvResponse;
}(utils_1.SpeakeasyBase));
exports.LpgtvResponse = LpgtvResponse;
