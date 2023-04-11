import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.</p> <p> </p>
 */
export declare class EfsFileLocation extends SpeakeasyBase {
    fileSystemId?: string;
    path?: string;
}
