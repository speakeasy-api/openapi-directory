package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout
 * Printout Object.
**/
public class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("letter")
    public String letter;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withLetter(String letter) {
        this.letter = letter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printer")
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter printer;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withPrinter(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter printer) {
        this.printer = printer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printout")
    public String printout;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withPrintout(String printout) {
        this.printout = printout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus status;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout withStatus(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus status) {
        this.status = status;
        return this;
    }
}