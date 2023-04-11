import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex data type that includes the profile configurations specified for field-level encryption.
 */
export declare class UpdateFieldLevelEncryptionConfig20181105RequestBodyFieldLevelEncryptionConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    contentTypeProfileConfig?: shared.ContentTypeProfileConfig;
    queryArgProfileConfig?: shared.QueryArgProfileConfig;
}
export declare class UpdateFieldLevelEncryptionConfig20181105RequestBody extends SpeakeasyBase {
    /**
     * A complex data type that includes the profile configurations specified for field-level encryption.
     */
    fieldLevelEncryptionConfig: UpdateFieldLevelEncryptionConfig20181105RequestBodyFieldLevelEncryptionConfig;
}
export declare class UpdateFieldLevelEncryptionConfig20181105Request extends SpeakeasyBase {
    /**
     * The ID of the configuration you want to update.
     */
    id: string;
    /**
     * The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFieldLevelEncryptionConfig20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
