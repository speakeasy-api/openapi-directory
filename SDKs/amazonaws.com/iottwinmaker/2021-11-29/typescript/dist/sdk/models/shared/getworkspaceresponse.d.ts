import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetWorkspaceResponse extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    description?: string;
    role: string;
    s3Location: string;
    updateDateTime: Date;
    workspaceId: string;
}
