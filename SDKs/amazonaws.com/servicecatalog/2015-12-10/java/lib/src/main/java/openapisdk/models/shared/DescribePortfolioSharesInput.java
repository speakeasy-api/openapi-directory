package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePortfolioSharesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public DescribePortfolioSharesInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public DescribePortfolioSharesInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public DescribePortfolioSharesInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonProperty("Type")
    public DescribePortfolioShareTypeEnum type;
    public DescribePortfolioSharesInput withType(DescribePortfolioShareTypeEnum type) {
        this.type = type;
        return this;
    }
}