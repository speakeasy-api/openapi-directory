import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of webhook subscriptions
 */
export declare class PaginatedWebhookSubscriptions extends SpeakeasyBase {
    /**
     * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
     */
    next?: string;
    /**
     * Page number of the current results. This is an optional element that is not provided in all responses.
     */
    page?: number;
    /**
     * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
     */
    pagelen?: number;
    /**
     * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
     */
    previous?: string;
    /**
     * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
     */
    size?: number;
    values?: Record<string, any>[];
}
