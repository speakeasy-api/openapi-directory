import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
import { CollectionTypeEnum } from "./collectiontypeenum";
/**
 * Details about each OpenSearch Serverless collection, including the collection endpoint and the OpenSearch Dashboards endpoint.
 */
export declare class CollectionDetail extends SpeakeasyBase {
    arn?: string;
    collectionEndpoint?: string;
    createdDate?: number;
    dashboardEndpoint?: string;
    description?: string;
    id?: string;
    kmsKeyArn?: string;
    lastModifiedDate?: number;
    name?: string;
    status?: CollectionStatusEnum;
    type?: CollectionTypeEnum;
}
