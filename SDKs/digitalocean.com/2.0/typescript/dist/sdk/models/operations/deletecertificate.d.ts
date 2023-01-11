import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class DeleteCertificate401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    pathParams: DeleteCertificatePathParams;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteCertificate401ApplicationJSONObject?: DeleteCertificate401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
