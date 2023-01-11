package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout
 * Printout Object.
**/
public class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("letter")
    public String letter;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withLetter(String letter) {
        this.letter = letter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printer")
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter printer;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withPrinter(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter printer) {
        this.printer = printer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printout")
    public String printout;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withPrintout(String printout) {
        this.printout = printout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus status;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout withStatus(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus status) {
        this.status = status;
        return this;
    }
}