import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyCustomDBEngineVersionActionEnum {
    ModifyCustomDBEngineVersion = "ModifyCustomDBEngineVersion"
}
/**
 * <p>The availability status to be assigned to the CEV. Valid values are as follows:</p> <dl> <dt>available</dt> <dd> <p>You can use this CEV to create a new RDS Custom DB instance.</p> </dd> <dt>inactive</dt> <dd> <p>You can create a new RDS Custom instance by restoring a DB snapshot with this CEV. You can't patch or create new instances with this CEV.</p> </dd> </dl> <p>You can change any status to any status. A typical reason to change status is to prevent the accidental use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status of your CEV from <code>available</code> to <code>inactive</code>, and from <code>inactive</code> back to <code>available</code>. To change the availability status of the CEV, it must not currently be in use by an RDS Custom instance, snapshot, or automated backup.</p>
 */
export declare enum GETModifyCustomDBEngineVersionStatusEnum {
    Available = "available",
    Inactive = "inactive",
    InactiveExceptRestore = "inactive-except-restore"
}
export declare enum GETModifyCustomDBEngineVersionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyCustomDBEngineVersionRequest extends SpeakeasyBase {
    action: GETModifyCustomDBEngineVersionActionEnum;
    /**
     * An optional description of your CEV.
     */
    description?: string;
    /**
     * The DB engine. The only supported value is <code>custom-oracle-ee</code>.
     */
    engine: string;
    /**
     * The custom engine version (CEV) that you want to modify. This option is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.
     */
    engineVersion: string;
    /**
     * <p>The availability status to be assigned to the CEV. Valid values are as follows:</p> <dl> <dt>available</dt> <dd> <p>You can use this CEV to create a new RDS Custom DB instance.</p> </dd> <dt>inactive</dt> <dd> <p>You can create a new RDS Custom instance by restoring a DB snapshot with this CEV. You can't patch or create new instances with this CEV.</p> </dd> </dl> <p>You can change any status to any status. A typical reason to change status is to prevent the accidental use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status of your CEV from <code>available</code> to <code>inactive</code>, and from <code>inactive</code> back to <code>available</code>. To change the availability status of the CEV, it must not currently be in use by an RDS Custom instance, snapshot, or automated backup.</p>
     */
    status?: GETModifyCustomDBEngineVersionStatusEnum;
    version: GETModifyCustomDBEngineVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyCustomDBEngineVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
