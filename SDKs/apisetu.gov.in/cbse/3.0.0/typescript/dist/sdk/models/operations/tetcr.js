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
exports.TetcrResponse = exports.TetcrRequest = exports.Tetcr504ApplicationJson = exports.Tetcr504ApplicationJsonErrorDescriptionEnum = exports.Tetcr504ApplicationJsonErrorEnum = exports.Tetcr503ApplicationJson = exports.Tetcr503ApplicationJsonErrorDescriptionEnum = exports.Tetcr503ApplicationJsonErrorEnum = exports.Tetcr502ApplicationJson = exports.Tetcr502ApplicationJsonErrorDescriptionEnum = exports.Tetcr502ApplicationJsonErrorEnum = exports.Tetcr500ApplicationJson = exports.Tetcr500ApplicationJsonErrorDescriptionEnum = exports.Tetcr500ApplicationJsonErrorEnum = exports.Tetcr404ApplicationJson = exports.Tetcr404ApplicationJsonErrorDescriptionEnum = exports.Tetcr404ApplicationJsonErrorEnum = exports.Tetcr401ApplicationJson = exports.Tetcr401ApplicationJsonErrorDescriptionEnum = exports.Tetcr401ApplicationJsonErrorEnum = exports.Tetcr400ApplicationJson = exports.Tetcr400ApplicationJsonErrorDescriptionEnum = exports.Tetcr400ApplicationJsonErrorEnum = exports.TetcrSecurity = exports.TetcrRequestBody = exports.TetcrRequestBodyFormatEnum = exports.TetcrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TetcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TetcrRequestBodyCertificateParameters, _super);
    function TetcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year_month" }),
        __metadata("design:type", String)
    ], TetcrRequestBodyCertificateParameters.prototype, "yearMonth", void 0);
    return TetcrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TetcrRequestBodyCertificateParameters = TetcrRequestBodyCertificateParameters;
var TetcrRequestBodyFormatEnum;
(function (TetcrRequestBodyFormatEnum) {
    TetcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(TetcrRequestBodyFormatEnum = exports.TetcrRequestBodyFormatEnum || (exports.TetcrRequestBodyFormatEnum = {}));
var TetcrRequestBody = /** @class */ (function (_super) {
    __extends(TetcrRequestBody, _super);
    function TetcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TetcrRequestBodyCertificateParameters)
    ], TetcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TetcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TetcrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TetcrRequestBody.prototype, "txnId", void 0);
    return TetcrRequestBody;
}(utils_1.SpeakeasyBase));
exports.TetcrRequestBody = TetcrRequestBody;
var TetcrSecurity = /** @class */ (function (_super) {
    __extends(TetcrSecurity, _super);
    function TetcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TetcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TetcrSecurity.prototype, "clientId", void 0);
    return TetcrSecurity;
}(utils_1.SpeakeasyBase));
exports.TetcrSecurity = TetcrSecurity;
var Tetcr400ApplicationJsonErrorEnum;
(function (Tetcr400ApplicationJsonErrorEnum) {
    Tetcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tetcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tetcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tetcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tetcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tetcr400ApplicationJsonErrorEnum = exports.Tetcr400ApplicationJsonErrorEnum || (exports.Tetcr400ApplicationJsonErrorEnum = {}));
var Tetcr400ApplicationJsonErrorDescriptionEnum;
(function (Tetcr400ApplicationJsonErrorDescriptionEnum) {
    Tetcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tetcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tetcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tetcr400ApplicationJsonErrorDescriptionEnum = exports.Tetcr400ApplicationJsonErrorDescriptionEnum || (exports.Tetcr400ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr400ApplicationJson, _super);
    function Tetcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr400ApplicationJson = Tetcr400ApplicationJson;
var Tetcr401ApplicationJsonErrorEnum;
(function (Tetcr401ApplicationJsonErrorEnum) {
    Tetcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tetcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tetcr401ApplicationJsonErrorEnum = exports.Tetcr401ApplicationJsonErrorEnum || (exports.Tetcr401ApplicationJsonErrorEnum = {}));
var Tetcr401ApplicationJsonErrorDescriptionEnum;
(function (Tetcr401ApplicationJsonErrorDescriptionEnum) {
    Tetcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tetcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tetcr401ApplicationJsonErrorDescriptionEnum = exports.Tetcr401ApplicationJsonErrorDescriptionEnum || (exports.Tetcr401ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr401ApplicationJson, _super);
    function Tetcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr401ApplicationJson = Tetcr401ApplicationJson;
var Tetcr404ApplicationJsonErrorEnum;
(function (Tetcr404ApplicationJsonErrorEnum) {
    Tetcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tetcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tetcr404ApplicationJsonErrorEnum = exports.Tetcr404ApplicationJsonErrorEnum || (exports.Tetcr404ApplicationJsonErrorEnum = {}));
var Tetcr404ApplicationJsonErrorDescriptionEnum;
(function (Tetcr404ApplicationJsonErrorDescriptionEnum) {
    Tetcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tetcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tetcr404ApplicationJsonErrorDescriptionEnum = exports.Tetcr404ApplicationJsonErrorDescriptionEnum || (exports.Tetcr404ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr404ApplicationJson, _super);
    function Tetcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr404ApplicationJson = Tetcr404ApplicationJson;
var Tetcr500ApplicationJsonErrorEnum;
(function (Tetcr500ApplicationJsonErrorEnum) {
    Tetcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tetcr500ApplicationJsonErrorEnum = exports.Tetcr500ApplicationJsonErrorEnum || (exports.Tetcr500ApplicationJsonErrorEnum = {}));
var Tetcr500ApplicationJsonErrorDescriptionEnum;
(function (Tetcr500ApplicationJsonErrorDescriptionEnum) {
    Tetcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tetcr500ApplicationJsonErrorDescriptionEnum = exports.Tetcr500ApplicationJsonErrorDescriptionEnum || (exports.Tetcr500ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr500ApplicationJson, _super);
    function Tetcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr500ApplicationJson = Tetcr500ApplicationJson;
var Tetcr502ApplicationJsonErrorEnum;
(function (Tetcr502ApplicationJsonErrorEnum) {
    Tetcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tetcr502ApplicationJsonErrorEnum = exports.Tetcr502ApplicationJsonErrorEnum || (exports.Tetcr502ApplicationJsonErrorEnum = {}));
var Tetcr502ApplicationJsonErrorDescriptionEnum;
(function (Tetcr502ApplicationJsonErrorDescriptionEnum) {
    Tetcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tetcr502ApplicationJsonErrorDescriptionEnum = exports.Tetcr502ApplicationJsonErrorDescriptionEnum || (exports.Tetcr502ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr502ApplicationJson, _super);
    function Tetcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr502ApplicationJson = Tetcr502ApplicationJson;
var Tetcr503ApplicationJsonErrorEnum;
(function (Tetcr503ApplicationJsonErrorEnum) {
    Tetcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tetcr503ApplicationJsonErrorEnum = exports.Tetcr503ApplicationJsonErrorEnum || (exports.Tetcr503ApplicationJsonErrorEnum = {}));
var Tetcr503ApplicationJsonErrorDescriptionEnum;
(function (Tetcr503ApplicationJsonErrorDescriptionEnum) {
    Tetcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tetcr503ApplicationJsonErrorDescriptionEnum = exports.Tetcr503ApplicationJsonErrorDescriptionEnum || (exports.Tetcr503ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr503ApplicationJson, _super);
    function Tetcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr503ApplicationJson = Tetcr503ApplicationJson;
var Tetcr504ApplicationJsonErrorEnum;
(function (Tetcr504ApplicationJsonErrorEnum) {
    Tetcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tetcr504ApplicationJsonErrorEnum = exports.Tetcr504ApplicationJsonErrorEnum || (exports.Tetcr504ApplicationJsonErrorEnum = {}));
var Tetcr504ApplicationJsonErrorDescriptionEnum;
(function (Tetcr504ApplicationJsonErrorDescriptionEnum) {
    Tetcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tetcr504ApplicationJsonErrorDescriptionEnum = exports.Tetcr504ApplicationJsonErrorDescriptionEnum || (exports.Tetcr504ApplicationJsonErrorDescriptionEnum = {}));
var Tetcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetcr504ApplicationJson, _super);
    function Tetcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Tetcr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetcr504ApplicationJson = Tetcr504ApplicationJson;
var TetcrRequest = /** @class */ (function (_super) {
    __extends(TetcrRequest, _super);
    function TetcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TetcrRequestBody)
    ], TetcrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TetcrSecurity)
    ], TetcrRequest.prototype, "security", void 0);
    return TetcrRequest;
}(utils_1.SpeakeasyBase));
exports.TetcrRequest = TetcrRequest;
var TetcrResponse = /** @class */ (function (_super) {
    __extends(TetcrResponse, _super);
    function TetcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TetcrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TetcrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr400ApplicationJson)
    ], TetcrResponse.prototype, "tetcr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr401ApplicationJson)
    ], TetcrResponse.prototype, "tetcr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr404ApplicationJson)
    ], TetcrResponse.prototype, "tetcr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr500ApplicationJson)
    ], TetcrResponse.prototype, "tetcr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr502ApplicationJson)
    ], TetcrResponse.prototype, "tetcr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr503ApplicationJson)
    ], TetcrResponse.prototype, "tetcr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetcr504ApplicationJson)
    ], TetcrResponse.prototype, "tetcr504ApplicationJSONObject", void 0);
    return TetcrResponse;
}(utils_1.SpeakeasyBase));
exports.TetcrResponse = TetcrResponse;
