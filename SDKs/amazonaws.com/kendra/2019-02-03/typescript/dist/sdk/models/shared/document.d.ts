import { SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeEnum } from "./contenttypeenum";
import { DocumentAttribute } from "./documentattribute";
import { HierarchicalPrincipal } from "./hierarchicalprincipal";
import { Principal } from "./principal";
import { S3Path } from "./s3path";
/**
 * A document in an index.
 */
export declare class Document extends SpeakeasyBase {
    accessControlConfigurationId?: string;
    accessControlList?: Principal[];
    attributes?: DocumentAttribute[];
    blob?: string;
    contentType?: ContentTypeEnum;
    hierarchicalAccessControlList?: HierarchicalPrincipal[];
    id: string;
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     */
    s3Path?: S3Path;
    title?: string;
}
