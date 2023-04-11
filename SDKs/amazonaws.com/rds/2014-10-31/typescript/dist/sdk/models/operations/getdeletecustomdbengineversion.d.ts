import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteCustomDBEngineVersionActionEnum {
    DeleteCustomDBEngineVersion = "DeleteCustomDBEngineVersion"
}
export declare enum GETDeleteCustomDBEngineVersionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteCustomDBEngineVersionRequest extends SpeakeasyBase {
    action: GETDeleteCustomDBEngineVersionActionEnum;
    /**
     * The database engine. The only supported engine is <code>custom-oracle-ee</code>.
     */
    engine: string;
    /**
     * The custom engine version (CEV) for your DB instance. This option is required for RDS Custom, but optional for Amazon RDS. The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.
     */
    engineVersion: string;
    version: GETDeleteCustomDBEngineVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteCustomDBEngineVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
