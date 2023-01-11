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
exports.VrwmiResponse = exports.VrwmiRequest = exports.Vrwmi504ApplicationJson = exports.Vrwmi504ApplicationJsonErrorDescriptionEnum = exports.Vrwmi504ApplicationJsonErrorEnum = exports.Vrwmi503ApplicationJson = exports.Vrwmi503ApplicationJsonErrorDescriptionEnum = exports.Vrwmi503ApplicationJsonErrorEnum = exports.Vrwmi502ApplicationJson = exports.Vrwmi502ApplicationJsonErrorDescriptionEnum = exports.Vrwmi502ApplicationJsonErrorEnum = exports.Vrwmi500ApplicationJson = exports.Vrwmi500ApplicationJsonErrorDescriptionEnum = exports.Vrwmi500ApplicationJsonErrorEnum = exports.Vrwmi404ApplicationJson = exports.Vrwmi404ApplicationJsonErrorDescriptionEnum = exports.Vrwmi404ApplicationJsonErrorEnum = exports.Vrwmi401ApplicationJson = exports.Vrwmi401ApplicationJsonErrorDescriptionEnum = exports.Vrwmi401ApplicationJsonErrorEnum = exports.Vrwmi400ApplicationJson = exports.Vrwmi400ApplicationJsonErrorDescriptionEnum = exports.Vrwmi400ApplicationJsonErrorEnum = exports.VrwmiSecurity = exports.VrwmiRequestBody = exports.VrwmiRequestBodyFormatEnum = exports.VrwmiRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VrwmiRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VrwmiRequestBodyCertificateParameters, _super);
    function VrwmiRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], VrwmiRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], VrwmiRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return VrwmiRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.VrwmiRequestBodyCertificateParameters = VrwmiRequestBodyCertificateParameters;
var VrwmiRequestBodyFormatEnum;
(function (VrwmiRequestBodyFormatEnum) {
    VrwmiRequestBodyFormatEnum["Pdf"] = "pdf";
})(VrwmiRequestBodyFormatEnum = exports.VrwmiRequestBodyFormatEnum || (exports.VrwmiRequestBodyFormatEnum = {}));
var VrwmiRequestBody = /** @class */ (function (_super) {
    __extends(VrwmiRequestBody, _super);
    function VrwmiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VrwmiRequestBodyCertificateParameters)
    ], VrwmiRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VrwmiRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VrwmiRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VrwmiRequestBody.prototype, "txnId", void 0);
    return VrwmiRequestBody;
}(utils_1.SpeakeasyBase));
exports.VrwmiRequestBody = VrwmiRequestBody;
var VrwmiSecurity = /** @class */ (function (_super) {
    __extends(VrwmiSecurity, _super);
    function VrwmiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VrwmiSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VrwmiSecurity.prototype, "clientId", void 0);
    return VrwmiSecurity;
}(utils_1.SpeakeasyBase));
exports.VrwmiSecurity = VrwmiSecurity;
var Vrwmi400ApplicationJsonErrorEnum;
(function (Vrwmi400ApplicationJsonErrorEnum) {
    Vrwmi400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vrwmi400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vrwmi400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vrwmi400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vrwmi400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vrwmi400ApplicationJsonErrorEnum = exports.Vrwmi400ApplicationJsonErrorEnum || (exports.Vrwmi400ApplicationJsonErrorEnum = {}));
var Vrwmi400ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi400ApplicationJsonErrorDescriptionEnum) {
    Vrwmi400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vrwmi400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vrwmi400ApplicationJsonErrorDescriptionEnum = exports.Vrwmi400ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi400ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi400ApplicationJson, _super);
    function Vrwmi400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi400ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi400ApplicationJson = Vrwmi400ApplicationJson;
var Vrwmi401ApplicationJsonErrorEnum;
(function (Vrwmi401ApplicationJsonErrorEnum) {
    Vrwmi401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vrwmi401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vrwmi401ApplicationJsonErrorEnum = exports.Vrwmi401ApplicationJsonErrorEnum || (exports.Vrwmi401ApplicationJsonErrorEnum = {}));
var Vrwmi401ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi401ApplicationJsonErrorDescriptionEnum) {
    Vrwmi401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vrwmi401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vrwmi401ApplicationJsonErrorDescriptionEnum = exports.Vrwmi401ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi401ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi401ApplicationJson, _super);
    function Vrwmi401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi401ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi401ApplicationJson = Vrwmi401ApplicationJson;
var Vrwmi404ApplicationJsonErrorEnum;
(function (Vrwmi404ApplicationJsonErrorEnum) {
    Vrwmi404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vrwmi404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vrwmi404ApplicationJsonErrorEnum = exports.Vrwmi404ApplicationJsonErrorEnum || (exports.Vrwmi404ApplicationJsonErrorEnum = {}));
var Vrwmi404ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi404ApplicationJsonErrorDescriptionEnum) {
    Vrwmi404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vrwmi404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vrwmi404ApplicationJsonErrorDescriptionEnum = exports.Vrwmi404ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi404ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi404ApplicationJson, _super);
    function Vrwmi404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi404ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi404ApplicationJson = Vrwmi404ApplicationJson;
var Vrwmi500ApplicationJsonErrorEnum;
(function (Vrwmi500ApplicationJsonErrorEnum) {
    Vrwmi500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vrwmi500ApplicationJsonErrorEnum = exports.Vrwmi500ApplicationJsonErrorEnum || (exports.Vrwmi500ApplicationJsonErrorEnum = {}));
var Vrwmi500ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi500ApplicationJsonErrorDescriptionEnum) {
    Vrwmi500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vrwmi500ApplicationJsonErrorDescriptionEnum = exports.Vrwmi500ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi500ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi500ApplicationJson, _super);
    function Vrwmi500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi500ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi500ApplicationJson = Vrwmi500ApplicationJson;
var Vrwmi502ApplicationJsonErrorEnum;
(function (Vrwmi502ApplicationJsonErrorEnum) {
    Vrwmi502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vrwmi502ApplicationJsonErrorEnum = exports.Vrwmi502ApplicationJsonErrorEnum || (exports.Vrwmi502ApplicationJsonErrorEnum = {}));
var Vrwmi502ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi502ApplicationJsonErrorDescriptionEnum) {
    Vrwmi502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vrwmi502ApplicationJsonErrorDescriptionEnum = exports.Vrwmi502ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi502ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi502ApplicationJson, _super);
    function Vrwmi502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi502ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi502ApplicationJson = Vrwmi502ApplicationJson;
var Vrwmi503ApplicationJsonErrorEnum;
(function (Vrwmi503ApplicationJsonErrorEnum) {
    Vrwmi503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vrwmi503ApplicationJsonErrorEnum = exports.Vrwmi503ApplicationJsonErrorEnum || (exports.Vrwmi503ApplicationJsonErrorEnum = {}));
var Vrwmi503ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi503ApplicationJsonErrorDescriptionEnum) {
    Vrwmi503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vrwmi503ApplicationJsonErrorDescriptionEnum = exports.Vrwmi503ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi503ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi503ApplicationJson, _super);
    function Vrwmi503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi503ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi503ApplicationJson = Vrwmi503ApplicationJson;
var Vrwmi504ApplicationJsonErrorEnum;
(function (Vrwmi504ApplicationJsonErrorEnum) {
    Vrwmi504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vrwmi504ApplicationJsonErrorEnum = exports.Vrwmi504ApplicationJsonErrorEnum || (exports.Vrwmi504ApplicationJsonErrorEnum = {}));
var Vrwmi504ApplicationJsonErrorDescriptionEnum;
(function (Vrwmi504ApplicationJsonErrorDescriptionEnum) {
    Vrwmi504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vrwmi504ApplicationJsonErrorDescriptionEnum = exports.Vrwmi504ApplicationJsonErrorDescriptionEnum || (exports.Vrwmi504ApplicationJsonErrorDescriptionEnum = {}));
var Vrwmi504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vrwmi504ApplicationJson, _super);
    function Vrwmi504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vrwmi504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vrwmi504ApplicationJson.prototype, "errorDescription", void 0);
    return Vrwmi504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vrwmi504ApplicationJson = Vrwmi504ApplicationJson;
var VrwmiRequest = /** @class */ (function (_super) {
    __extends(VrwmiRequest, _super);
    function VrwmiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", VrwmiRequestBody)
    ], VrwmiRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VrwmiSecurity)
    ], VrwmiRequest.prototype, "security", void 0);
    return VrwmiRequest;
}(utils_1.SpeakeasyBase));
exports.VrwmiRequest = VrwmiRequest;
var VrwmiResponse = /** @class */ (function (_super) {
    __extends(VrwmiResponse, _super);
    function VrwmiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VrwmiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VrwmiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi400ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi401ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi404ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi500ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi502ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi503ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vrwmi504ApplicationJson)
    ], VrwmiResponse.prototype, "vrwmi504ApplicationJSONObject", void 0);
    return VrwmiResponse;
}(utils_1.SpeakeasyBase));
exports.VrwmiResponse = VrwmiResponse;
