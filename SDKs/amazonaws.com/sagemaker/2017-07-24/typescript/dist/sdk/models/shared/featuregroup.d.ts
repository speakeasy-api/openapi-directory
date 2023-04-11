import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { LastUpdateStatus } from "./lastupdatestatus";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";
/**
 * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
 */
export declare class FeatureGroup extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    eventTimeFeatureName?: string;
    failureReason?: string;
    featureDefinitions?: FeatureDefinition[];
    featureGroupArn?: string;
    featureGroupName?: string;
    featureGroupStatus?: FeatureGroupStatusEnum;
    lastModifiedTime?: Date;
    lastUpdateStatus?: LastUpdateStatus;
    /**
     * <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
     */
    offlineStoreConfig?: OfflineStoreConfig;
    /**
     * The status of <code>OfflineStore</code>.
     */
    offlineStoreStatus?: OfflineStoreStatus;
    /**
     * Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
     */
    onlineStoreConfig?: OnlineStoreConfig;
    recordIdentifierFeatureName?: string;
    roleArn?: string;
    tags?: Tag[];
}
