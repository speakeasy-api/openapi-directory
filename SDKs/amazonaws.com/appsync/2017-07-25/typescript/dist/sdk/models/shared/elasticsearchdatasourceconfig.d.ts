import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>
 */
export declare class ElasticsearchDataSourceConfig extends SpeakeasyBase {
    awsRegion: string;
    endpoint: string;
}
