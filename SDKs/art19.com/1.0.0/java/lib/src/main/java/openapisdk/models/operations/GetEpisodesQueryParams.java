package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetEpisodesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=included_in_inventory_calendar")
    public String includedInInventoryCalendar;
    public GetEpisodesQueryParams withIncludedInInventoryCalendar(String includedInInventoryCalendar) {
        this.includedInInventoryCalendar = includedInInventoryCalendar;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public String month;
    public GetEpisodesQueryParams withMonth(String month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetEpisodesQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetEpisodesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published")
    public Boolean published;
    public GetEpisodesQueryParams withPublished(Boolean published) {
        this.published = published;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetEpisodesQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=released_after")
    public OffsetDateTime releasedAfter;
    public GetEpisodesQueryParams withReleasedAfter(OffsetDateTime releasedAfter) {
        this.releasedAfter = releasedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=released_before")
    public OffsetDateTime releasedBefore;
    public GetEpisodesQueryParams withReleasedBefore(OffsetDateTime releasedBefore) {
        this.releasedBefore = releasedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rss")
    public Boolean rss;
    public GetEpisodesQueryParams withRss(Boolean rss) {
        this.rss = rss;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=season_id")
    public String seasonId;
    public GetEpisodesQueryParams withSeasonId(String seasonId) {
        this.seasonId = seasonId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=series_id")
    public String seriesId;
    public GetEpisodesQueryParams withSeriesId(String seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetEpisodesSortEnum[] sort;
    public GetEpisodesQueryParams withSort(GetEpisodesSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetEpisodesQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}