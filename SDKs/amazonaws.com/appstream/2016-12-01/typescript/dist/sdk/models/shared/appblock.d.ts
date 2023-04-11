import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { ScriptDetails } from "./scriptdetails";
/**
 * <p>Describes an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
 */
export declare class AppBlock extends SpeakeasyBase {
    arn: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    name: string;
    setupScriptDetails: ScriptDetails;
    sourceS3Location?: S3Location;
}
