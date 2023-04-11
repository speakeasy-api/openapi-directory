import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes an action that writes data to an Amazon OpenSearch Service domain.</p> <note> <p>The <code>Elasticsearch</code> action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the <code>OpenSearch</code> rule action instead. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearchAction</a>.</p> </note>
 */
export declare class ElasticsearchAction extends SpeakeasyBase {
    endpoint: string;
    id: string;
    index: string;
    roleArn: string;
    type: string;
}
