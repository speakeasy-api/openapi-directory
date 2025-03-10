/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SearchReposRequest {
    /**
     * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public org.openapis.openapi.models.shared.OrderEnum order;

    public SearchReposRequest withOrder(org.openapis.openapi.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public SearchReposRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public SearchReposRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@2.21/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;

    public SearchReposRequest withQ(String q) {
        this.q = q;
        return this;
    }
    
    /**
     * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/enterprise-server@2.21/rest/reference/search#ranking-search-results)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchReposSortEnum sort;

    public SearchReposRequest withSort(SearchReposSortEnum sort) {
        this.sort = sort;
        return this;
    }
    
    public SearchReposRequest(@JsonProperty("q") String q) {
        this.q = q;
  }
}
